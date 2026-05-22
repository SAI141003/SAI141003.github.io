-- Oyshi's Bangla Bistro — Supabase schema
-- Run in Supabase Dashboard → SQL Editor

-- Gallery images (URLs from Storage or external)
create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  alt text default '',
  title text default '',
  description text default '',
  price text default '',
  menu_board boolean default false,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Customer reviews (owner approves before they show on site)
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating int not null check (rating >= 1 and rating <= 5),
  message text not null,
  email text default '',
  approved boolean default false,
  created_at timestamptz default now()
);

alter table public.gallery_images enable row level security;
alter table public.reviews enable row level security;

-- Anyone can view gallery
create policy "gallery public read"
  on public.gallery_images for select
  using (true);

-- Only logged-in owner can add/edit/delete gallery rows
create policy "gallery owner insert"
  on public.gallery_images for insert
  to authenticated
  with check (true);

create policy "gallery owner update"
  on public.gallery_images for update
  to authenticated
  using (true);

create policy "gallery owner delete"
  on public.gallery_images for delete
  to authenticated
  using (true);

-- Anyone can read approved reviews
create policy "reviews public read approved"
  on public.reviews for select
  using (approved = true);

-- Owner can read all reviews (for approval page)
create policy "reviews owner read all"
  on public.reviews for select
  to authenticated
  using (true);

-- Anyone can submit a review (pending approval)
create policy "reviews public insert"
  on public.reviews for insert
  with check (approved = false);

-- Owner can approve or delete reviews
create policy "reviews owner update"
  on public.reviews for update
  to authenticated
  using (true);

create policy "reviews owner delete"
  on public.reviews for delete
  to authenticated
  using (true);

-- Storage bucket: create "gallery" in Dashboard → Storage, set to Public
-- Policies (Storage → gallery → Policies):
--   SELECT: public
--   INSERT, UPDATE, DELETE: authenticated only
