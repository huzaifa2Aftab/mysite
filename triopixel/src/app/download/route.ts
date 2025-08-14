import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
	try {
		const zipPath = path.resolve(process.cwd(), "..", "triopixel.zip");
		const exists = fs.existsSync(zipPath);
		if (!exists) {
			return NextResponse.json({ ok: false, error: "Zip not found. Build or export first." }, { status: 404 });
		}
		const buffer = await fs.promises.readFile(zipPath);
		const data = new Uint8Array(buffer);
		return new NextResponse(data as any, {
			headers: {
				"Content-Type": "application/zip",
				"Content-Disposition": "attachment; filename=\"triopixel.zip\"",
				"Cache-Control": "no-store",
			},
		});
	} catch (e: any) {
		return NextResponse.json({ ok: false, error: e?.message ?? "Download failed" }, { status: 500 });
	}
}