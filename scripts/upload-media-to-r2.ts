/**
 * One-shot migration: upload every file in ./media/ to the R2 bucket.
 * Reads creds from .env.local. Run with: npx tsx scripts/upload-media-to-r2.ts
 */

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readFile, readdir } from "fs/promises";
import { extname, join } from "path";
import { config } from "dotenv";

config({ path: ".env.local" });

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
  console.error("Missing R2 env vars in .env.local");
  process.exit(1);
}

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
};

const client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

async function main() {
  const files = await readdir("media");
  console.log(`Uploading ${files.length} files to R2 bucket "${R2_BUCKET}"...`);

  let done = 0;
  let failed = 0;
  for (const filename of files) {
    try {
      const body = await readFile(join("media", filename));
      const ext = extname(filename).toLowerCase();
      await client.send(
        new PutObjectCommand({
          Bucket: R2_BUCKET,
          Key: filename,
          Body: body,
          ContentType: MIME[ext] || "application/octet-stream",
        }),
      );
      done++;
      if (done % 25 === 0) console.log(`  ${done}/${files.length}`);
    } catch (err) {
      failed++;
      console.error(`  FAIL ${filename}:`, (err as Error).message);
    }
  }
  console.log(`Done. ${done} uploaded, ${failed} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
