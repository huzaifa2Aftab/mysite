"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
	const [stats, setStats] = useState<{ contacts: number; hires: number } | null>(null);
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch("/api/admin/clients");
				const data = await res.json();
				setStats({ contacts: data?.data?.contacts?.length ?? 0, hires: data?.data?.hires?.length ?? 0 });
			} catch {}
		})();
	}, []);

	return (
		<div className="relative mx-auto max-w-6xl px-6 py-16">
			<div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
			<h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
			<p className="mt-2 text-foreground/70">A quick overview of incoming leads and requests.</p>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div className="glass rounded-2xl p-6">
					<p className="text-sm text-foreground/70">Contact messages</p>
					<p className="text-4xl font-bold mt-2">{stats ? stats.contacts : "–"}</p>
				</div>
				<div className="glass rounded-2xl p-6">
					<p className="text-sm text-foreground/70">Hire requests</p>
					<p className="text-4xl font-bold mt-2">{stats ? stats.hires : "–"}</p>
				</div>
			</div>
			<div className="mt-8 flex gap-3">
				<a href="/hire" className="px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors">Get a Quote</a>
				<a href="/contact" className="px-5 py-3 rounded-full border border-white/15 hover:bg-white/10">Contact us</a>
			</div>
		</div>
	);
}