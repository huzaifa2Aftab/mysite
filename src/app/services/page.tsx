import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata = { title: "Services — TrioPixel" };

export default function ServicesPage() {
	return (
		<div className="mx-auto max-w-7xl px-6 py-16">
			<h1 className="text-3xl md:text-4xl font-bold">Services</h1>
			<p className="mt-2 text-foreground/70 max-w-prose">
				From gorgeous websites to advanced AI agents and analytics, TrioPixel delivers end-to-end solutions with craft and performance.
			</p>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{services.map((s) => (
					<ServiceCard key={s.slug} title={s.title} description={s.description} href={`/services/${s.slug}`} tags={s.stack.slice(0, 5)} />
				))}
			</div>
		</div>
	);
}