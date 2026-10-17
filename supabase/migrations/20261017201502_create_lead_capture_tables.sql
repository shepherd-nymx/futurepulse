/*
# Create lead capture tables

1. New Tables
- `contact_messages` — inquiries submitted from the "Let's Build & Maintain Something" contact form.
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `organization` (text, nullable) — optional company / university / group
  - `reason` (text, not null) — selected reason for contacting (e.g. "Partnership")
  - `message` (text, not null) — the inquiry body
  - `created_at` (timestamptz, defaults to now)
- `quote_requests` — quotation inquiries submitted from the Services & Pricing quote modal.
  - `id` (uuid, primary key, auto-generated)
  - `client_name` (text, not null) — requester's full name
  - `email` (text, nullable) — requester's email (optional if phone given)
  - `phone_or_whatsapp` (text, nullable) — requester's phone / WhatsApp number
  - `company_or_organization` (text, nullable) — optional organization
  - `selected_services` (jsonb, not null, default '[]') — array of selected service ids
  - `budget_range` (text, not null) — selected budget bracket
  - `timeline` (text, not null) — selected desired timeline
  - `project_description` (text, nullable) — free-form project notes
  - `created_at` (timestamptz, defaults to now)

2. Security
- RLS enabled on both tables.
- Insert-only access for the public site (anon + authenticated roles): visitors may submit
  new inquiries but cannot read, edit, or delete stored ones.
- An index on `created_at` for each table to support newest-first listing.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  reason text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  email text,
  phone_or_whatsapp text,
  company_or_organization text,
  selected_services jsonb NOT NULL DEFAULT '[]'::jsonb,
  budget_range text NOT NULL,
  timeline text NOT NULL,
  project_description text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests (created_at DESC);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_can_submit_contact_messages" ON contact_messages;
CREATE POLICY "public_can_submit_contact_messages" ON contact_messages
FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_can_submit_quote_requests" ON quote_requests;
CREATE POLICY "public_can_submit_quote_requests" ON quote_requests
FOR INSERT TO anon, authenticated WITH CHECK (true);
