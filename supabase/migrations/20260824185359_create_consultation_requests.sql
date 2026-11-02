/*
# Create consultation_requests table (single-tenant, no auth)

1. New Tables
- `consultation_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's work email
  - `message` (text, nullable) — what they'd like to improve
  - `source` (text, nullable) — which CTA button triggered the submission
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `consultation_requests`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE for anon — submissions are private to the site owner.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests" ON consultation_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);
