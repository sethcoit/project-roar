/*
# Add qualifying fields to consultation_requests

1. Changes
- `industry` (text, nullable) — the visitor's industry
- `client_book_size` (text, nullable) — approximate number of clients on record
- `crm_system` (text, nullable) — current CRM or POS, free text
- `timeline` (text, nullable) — when they want to start

All columns are nullable so earlier rows and older form versions remain valid.
Existing RLS policies (anon INSERT only) cover the new columns.
*/

ALTER TABLE consultation_requests ADD COLUMN IF NOT EXISTS industry text;
ALTER TABLE consultation_requests ADD COLUMN IF NOT EXISTS client_book_size text;
ALTER TABLE consultation_requests ADD COLUMN IF NOT EXISTS crm_system text;
ALTER TABLE consultation_requests ADD COLUMN IF NOT EXISTS timeline text;
