import { getServiceBySlug, services } from "@/lib/services";
import Link from "next/link";

export async function generateStaticParams() {
	return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const service = getServiceBySlug(slug);
	if (!service) {
		return (
			<div className="mx-auto max-w-7xl px-6 py-16">
				<h1 className="text-2xl font-bold">Service not found</h1>
				<p className="mt-2 text-foreground/70">Please check the URL or browse our other services.</p>
				<Link className="mt-4 inline-block text-cyan-300" href="/services">Back to services</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<Link href="/services" className="text-cyan-300">← All services</Link>
			<h1 className="mt-4 text-3xl md:text-4xl font-bold">{service.title}</h1>
			<p className="mt-3 text-foreground/80 max-w-prose">{service.description}</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="glass rounded-2xl p-6">
					<h2 className="text-xl font-semibold">Tech Stack</h2>
					<ul className="mt-3 grid grid-cols-2 gap-2">
						{service.stack.map((t) => (
							<li key={t} className="text-sm px-2 py-1 rounded-md bg-white/5 border border-white/10">{t}</li>
						))}
					</ul>
				</div>
				<div className="glass rounded-2xl p-6">
					<h2 className="text-xl font-semibold">Use Cases</h2>
					<ul className="mt-3 list-disc list-inside space-y-1 text-foreground/85">
						{service.useCases.map((u) => (
							<li key={u}>{u}</li>
						))}
					</ul>
				</div>
			</div>

			<div className="mt-10">
				<Link href="/hire" className="px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors">Get a Quote</Link>
			</div>
		</div>
	);
}