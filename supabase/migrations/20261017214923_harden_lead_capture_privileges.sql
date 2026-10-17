/*
# Harden lead capture table privileges

1. What changed
- The `contact_messages` and `quote_requests` tables previously granted the public
  browser role broad table privileges (read, update, delete) even though row level
  security blocked all of those operations. This tightens it further: the public
  browser roles now have INSERT privilege only.

2. Security changes
- Revoke SELECT, UPDATE, DELETE from `anon` and `authenticated` on both tables.
- INSERT policies remain unchanged — visitors can still submit inquiries.

3. Important notes
- Row level security remains enabled on both tables.
- Existing rows and data are untouched.
*/

REVOKE SELECT, UPDATE, DELETE ON contact_messages FROM anon, authenticated;
REVOKE SELECT, UPDATE, DELETE ON quote_requests FROM anon, authenticated;
