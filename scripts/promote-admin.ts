/**
 * One-shot: promote a user to admin role.
 * Run with: npx tsx scripts/promote-admin.ts <email>
 * Defaults to ksmesdev@gmail.com if no email is passed.
 *
 * Talks to Postgres directly (via pg) instead of going through Payload's
 * local API, because Payload's loadEnv shim is incompatible with the
 * installed Next.js version and crashes on getPayload().
 */

import { config } from "dotenv";
import { Client } from "pg";

config({ path: ".env.local" });

const email = process.argv[2] ?? "ksmesdev@gmail.com";
const connectionString = process.env.DATABASE_URI;

if (!connectionString) {
  console.error("DATABASE_URI is not set in .env.local");
  process.exit(1);
}

async function main() {
  const client = new Client({ connectionString });
  await client.connect();

  try {
    const before = await client.query<{ id: number; email: string; role: string }>(
      "SELECT id, email, role FROM users WHERE email = $1 LIMIT 1",
      [email],
    );

    if (before.rows.length === 0) {
      console.error(`No user found with email: ${email}`);
      process.exit(1);
    }

    const user = before.rows[0];
    if (user.role === "admin") {
      console.log(`${email} is already an admin. No changes made.`);
      return;
    }

    const updated = await client.query<{ id: number; email: string; role: string }>(
      "UPDATE users SET role = 'admin' WHERE id = $1 RETURNING id, email, role",
      [user.id],
    );

    console.log(`Promoted ${updated.rows[0].email} to ${updated.rows[0].role}.`);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
