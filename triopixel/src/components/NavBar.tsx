"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/dashboard", label: "Dashboard" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const pathname = usePathname();
	return (
		<div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-b border-white/10">
			<nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
				<Link href="/" className="group flex items-center gap-2">
					<motion.div
						initial={{ rotate: -10, scale: 0.9 }}
						animate={{ rotate: 0, scale: 1 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
						className="relative"
					>
						<Sparkles className="size-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
					</motion.div>
					<span className="text-lg font-semibold tracking-wide">TrioPixel</span>
				</Link>
				<ul className="hidden md:flex items-center gap-6">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								href={l.href}
								className={`transition-colors hover:text-cyan-300 ${pathname === l.href ? "text-cyan-300" : "text-foreground/80"}`}
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-3">
					<Link href="/hire" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors">
						<Rocket className="size-4 group-hover:translate-x-0.5 transition-transform" />
						<span>Get a Quote</span>
					</Link>
				</div>
			</nav>
		</div>
	);
}