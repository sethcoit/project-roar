/*
  Capture calculator estimate requests for direct, consented follow-up.
  Public visitors can insert only; lead data is not readable through the anon API.
*/

CREATE TABLE IF NOT EXISTS calculator_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL CHECK (length(trim(email)) BETWEEN 3 AND 320),
  client_count integer NOT NULL CHECK (client_count >= 0),
  inactive_client_percentage integer NOT NULL CHECK (inactive_client_percentage BETWEEN 0 AND 90),
  average_order_value numeric NOT NULL CHECK (average_order_value >= 0),
  reactivation_percentage integer NOT NULL CHECK (reactivation_percentage BETWEEN 1 AND 20),
  estimated_opportunity numeric NOT NULL CHECK (estimated_opportunity >= 0),
  follow_up_consent boolean NOT NULL CHECK (follow_up_consent),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE calculator_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_calculator_leads" ON calculator_leads;
CREATE POLICY "anon_insert_calculator_leads" ON calculator_leads FOR INSERT
  TO anon, authenticated WITH CHECK (follow_up_consent = true);
