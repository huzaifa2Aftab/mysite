"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, href, tags }: { title: string; description: string; href: string; tags: string[] }) {
	return (
		<motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="glass rounded-2xl p-6">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold">{title}</h3>
				<span className="text-cyan-300">→</span>
			</div>
			<p className="mt-2 text-sm text-foreground/70">{description}</p>
			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((t) => (
					<span key={t} className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20">{t}</span>
				))}
			</div>
			<Link href={href} className="mt-4 inline-block text-sm text-cyan-300 hover:underline">Learn more</Link>
		</motion.div>
	);
}