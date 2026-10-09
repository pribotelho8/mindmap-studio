export const LEGACY_PUBLIC_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validatePublicName(value: string): string {
  const name = value.trim().toLowerCase();
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) ||
    name.length < 3 ||
    name.length > 64 ||
    LEGACY_PUBLIC_ID.test(name)
  ) {
    throw new Error(
      "Use de 3 a 64 caracteres: letras sem acentos, números e hífens entre palavras.",
    );
  }
  return name;
}
