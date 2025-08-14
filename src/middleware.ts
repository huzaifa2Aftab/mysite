export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|api).*)",
	],
};

export default function middleware() {
	// No-op: reserved for auth or headers
}