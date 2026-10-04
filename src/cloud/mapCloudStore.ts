import type { MindMapDoc } from "../model/types";
import { supabase } from "../lib/supabase";

async function currentUserId(): Promise<string> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  if (!user) throw new Error("Usuário não autenticado.");

  return user.id;
}

export async function saveMapToCloud(doc: MindMapDoc): Promise<void> {
  const userId = await currentUserId();

  const { error } = await supabase.from("maps").upsert(
    {
      id: doc.id,
      user_id: userId,
      title: doc.title,
      content: doc,
      version: 1,
      deleted_at: doc.meta?.trashedAt
        ? new Date(doc.meta.trashedAt).toISOString()
        : null,
    },
    {
      onConflict: "id",
    },
  );

  if (error) throw error;
}

export async function loadMapFromCloud(
  id: string,
): Promise<MindMapDoc | null> {
  const { data, error } = await supabase
    .from("maps")
    .select("content")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;

  return data?.content
    ? (data.content as unknown as MindMapDoc)
    : null;
}

export async function listMapsFromCloud(): Promise<MindMapDoc[]> {
  const { data, error } = await supabase
    .from("maps")
    .select("content")
    .is("deleted_at", null)
    .order("updated_at", { ascending: false });

  if (error) throw error;

  return (data ?? []).map(
    (row) => row.content as unknown as MindMapDoc,
  );
}

export async function softDeleteMapFromCloud(
  id: string,
): Promise<void> {
  const { error } = await supabase
    .from("maps")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;
}

export async function restoreMapInCloud(id: string): Promise<void> {
  const { error } = await supabase
    .from("maps")
    .update({
      deleted_at: null,
    })
    .eq("id", id);

  if (error) throw error;
}

export async function permanentlyDeleteMapFromCloud(
  id: string,
): Promise<void> {
  const { error } = await supabase
    .from("maps")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
