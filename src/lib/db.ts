import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

export type ContactMessage = {
	id: number;
	name: string;
	email: string;
	phone?: string | null;
	country?: string | null;
	message: string;
	created_at: string;
};

export type HireRequest = {
	id: number;
	name: string;
	email: string;
	phone?: string | null;
	country?: string | null;
	company?: string | null;
	budget?: string | null;
	timeline?: string | null;
	description: string;
	created_at: string;
};

const dataDir = path.join(process.cwd(), "data");
const dbFile = path.join(dataDir, "triopixel.db");

if (!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbFile);

db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS contact_messages (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	phone TEXT,
	country TEXT,
	message TEXT NOT NULL,
	created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS hire_requests (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	phone TEXT,
	country TEXT,
	company TEXT,
	budget TEXT,
	timeline TEXT,
	description TEXT NOT NULL,
	created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
`);

export function insertContactMessage(input: Omit<ContactMessage, "id" | "created_at">): ContactMessage {
	const stmt = db.prepare(
		"INSERT INTO contact_messages (name, email, phone, country, message) VALUES (@name, @email, @phone, @country, @message)"
	);
	const info = stmt.run(input);
	const row = db.prepare("SELECT * FROM contact_messages WHERE id = ?").get(info.lastInsertRowid) as ContactMessage;
	return row;
}

export function insertHireRequest(input: Omit<HireRequest, "id" | "created_at">): HireRequest {
	const stmt = db.prepare(
		"INSERT INTO hire_requests (name, email, phone, country, company, budget, timeline, description) VALUES (@name, @email, @phone, @country, @company, @budget, @timeline, @description)"
	);
	const info = stmt.run(input);
	const row = db.prepare("SELECT * FROM hire_requests WHERE id = ?").get(info.lastInsertRowid) as HireRequest;
	return row;
}

export function getAllClientData(): { contacts: ContactMessage[]; hires: HireRequest[] } {
	const contacts = db.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC").all() as ContactMessage[];
	const hires = db.prepare("SELECT * FROM hire_requests ORDER BY created_at DESC").all() as HireRequest[];
	return { contacts, hires };
}

export default db;