import { NextResponse } from "next/server";
import { getAllClientData } from "@/lib/db";

export async function GET() {
	const data = getAllClientData();
	return NextResponse.json({ ok: true, data });
}