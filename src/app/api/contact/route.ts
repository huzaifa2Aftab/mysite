import { NextResponse } from "next/server";
import { z } from "zod";
import { insertContactMessage } from "@/lib/db";

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional().nullable(),
	country: z.string().optional().nullable(),
	message: z.string().min(10),
});

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const parsed = schema.parse(json);
		const row = insertContactMessage(parsed);
		return NextResponse.json({ ok: true, data: row });
	} catch (err: any) {
		return NextResponse.json({ ok: false, error: err.message ?? "Invalid payload" }, { status: 400 });
	}
}