-- Preserve public_slug (the existing UUID) so old links continue to work.
alter table public.maps add column if not exists custom_public_slug text;
create unique index if not exists maps_custom_public_slug_unique
  on public.maps (custom_public_slug);
alter table public.maps add constraint maps_custom_public_slug_format check (
  custom_public_slug is null or (
    length(custom_public_slug) between 3 and 64
    and custom_public_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    and custom_public_slug !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  )
);
-- Existing maps RLS policies still govern reads and owner-only updates.
