-- SafaiSetu schema placeholder
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY,
  name text,
  phone text,
  role text,
  village_name text
);

CREATE TABLE IF NOT EXISTS public.workers (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES public.users(id),
  name text,
  assigned_area text
);

CREATE TABLE IF NOT EXISTS public.complaints (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES public.users(id),
  assigned_worker_id uuid REFERENCES public.workers(id),
  waste_type text,
  description text,
  location_lat double precision,
  location_lng double precision,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);
