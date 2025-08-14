export default function GradientRings() {
	return (
		<svg aria-hidden className="absolute -z-10 inset-0 w-full h-full opacity-50" viewBox="0 0 1200 600" preserveAspectRatio="none">
			<defs>
				<radialGradient id="ring" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
					<stop offset="60%" stopColor="#22d3ee" stopOpacity="0.06" />
					<stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
				</radialGradient>
			</defs>
			{Array.from({ length: 6 }).map((_, i) => (
				<circle key={i} cx={600} cy={300} r={80 + i * 60} fill="none" stroke="url(#ring)" strokeWidth={2} />
			))}
		</svg>
	);
}