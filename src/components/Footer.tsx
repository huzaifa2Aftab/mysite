export default function Footer() {
	return (
		<footer className="border-t border-white/10 mt-24 py-12">
			<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
				<div>
					<h3 className="font-semibold mb-2">TrioPixel</h3>
					<p className="text-foreground/70">Futuristic software, crafted in 3D.</p>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Contact</h4>
					<p>
						Email: <a className="text-cyan-300 hover:underline" href="mailto:info@triopixel.com">info@triopixel.com</a>
					</p>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Navigation</h4>
					<ul className="space-y-1 text-foreground/80">
						<li><a href="/">Home</a></li>
						<li><a href="/services">Services</a></li>
						<li><a href="/dashboard">Dashboard</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
			</div>
			<p className="text-center mt-8 text-foreground/50 text-xs">© {new Date().getFullYear()} TrioPixel. All rights reserved.</p>
		</footer>
	);
}