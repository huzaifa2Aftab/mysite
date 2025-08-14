import Link from "next/link";
import Logo3D from "@/components/Logo3D";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-cyan-300 font-medium tracking-wide mb-2">Futuristic • 3D • Performance</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                TrioPixel
                <span className="block text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">Builds the Future</span>
              </h1>
              <p className="mt-4 text-foreground/80 max-w-prose">
                Websites, apps, machine learning, AI agents, and data platforms — crafted with a modern 3D aesthetic and optimized for speed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/hire" className="px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors">Get a Quote</Link>
                <Link href="/services" className="px-5 py-3 rounded-full border border-white/15 hover:bg-white/10 transition-colors">Learn More</Link>
              </div>
            </div>
            <div>
              <Logo3D height={360} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What we do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <span className="text-cyan-300 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{s.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.stack.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
