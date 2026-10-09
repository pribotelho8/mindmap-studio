import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const query: Record<string, ReturnType<typeof vi.fn>> = {};
  for (const name of ["update", "select", "eq", "is"]) query[name] = vi.fn(() => query);
  query.single = vi.fn();
  query.maybeSingle = vi.fn();
  return { query, getUser: vi.fn() };
});
vi.mock("../src/lib/supabase", () => ({
  supabase: { from: vi.fn(() => mocks.query), auth: { getUser: mocks.getUser } },
}));
import { loadPublicMap, setCustomPublicName } from "../src/cloud/mapCloudStore";

describe("public links", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.getUser.mockResolvedValue({ data: { user: { id: "owner" } }, error: null });
    mocks.query.maybeSingle.mockResolvedValue({ data: { content: { title: "Map" } }, error: null });
  });
  it("keeps UUID links and resolves personalized names using the appropriate column", async () => {
    const id = "4076d52b-6f6d-48df-9752-337d7e63707b";
    await loadPublicMap(id);
    expect(mocks.query.eq).toHaveBeenCalledWith("public_slug", id);
    await loadPublicMap("proposta-estrategica");
    expect(mocks.query.eq).toHaveBeenCalledWith("custom_public_slug", "proposta-estrategica");
    expect(mocks.query.eq).toHaveBeenCalledWith("is_public", true);
    expect(mocks.query.is).toHaveBeenCalledWith("deleted_at", null);
  });
  it("saves the normalized alias for the authenticated owner without replacing the legacy ID", async () => {
    mocks.query.single.mockResolvedValue({
      data: { custom_public_slug: "proposta-estrategica" },
      error: null,
    });
    expect(await setCustomPublicName("map", " Proposta-Estrategica ")).toBe("proposta-estrategica");
    expect(mocks.query.update).toHaveBeenCalledWith({ custom_public_slug: "proposta-estrategica" });
    expect(mocks.query.eq).toHaveBeenCalledWith("user_id", "owner");
  });
  it("reports duplicate names and rejects invalid input before saving", async () => {
    mocks.query.single.mockResolvedValue({ data: null, error: { code: "23505" } });
    await expect(setCustomPublicName("map", "proposta-estrategica")).rejects.toThrow(
      "já está em uso",
    );
    mocks.query.update.mockClear();
    await expect(setCustomPublicName("map", "../privado")).rejects.toThrow("3 a 64");
    expect(mocks.query.update).not.toHaveBeenCalled();
  });
});
