/*
# Create newsletter_subscribers table

1. New Tables
- `newsletter_subscribers`
- `id` (uuid, primary key)
- `email` (text, unique, not null) — the subscriber's email address
- `source` (text, nullable) — where the subscription originated (e.g. "Homepage Lead Magnet", "Footer")
- `created_at` (timestamptz, defaults to now)
2. Security
- Enable RLS on `newsletter_subscribers`.
- Allow anon + authenticated INSERT only (visitors can subscribe without signing in).
- No SELECT, UPDATE, or DELETE for anon/authenticated — only server-side roles can read or manage subscribers.
3. Notes
- This is a single-tenant no-auth app. The anon-key frontend needs INSERT access so visitors can subscribe.
- Duplicate emails are prevented by the UNIQUE constraint; the frontend handles "already subscribed" gracefully.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);
