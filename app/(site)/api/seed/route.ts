import { getPayload } from "payload";
import config from "@payload-config";
import { seed } from "@/lib/seed";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const payload = await getPayload({ config });
    await seed(payload);
    return NextResponse.json({ success: true, message: "Seed complete" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { success: false, message: String(error) },
      { status: 500 },
    );
  }
}
