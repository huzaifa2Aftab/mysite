"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional(),
	country: z.string().optional(),
	message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
	const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

	async function onSubmit(data: FormData) {
		const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
		if (res.ok) {
			reset();
			alert("Thanks! We will get back soon.");
		} else {
			alert("Submission failed");
		}
	}

	return (
		<div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
			<div>
				<h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
				<p className="mt-2 text-foreground/70">Tell us about your project. You can also email us directly at <a className="text-cyan-300" href="mailto:info@triopixel.com">info@triopixel.com</a>.</p>
				<form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
					<div>
						<label className="text-sm">Name</label>
						<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="Jane Doe" {...register("name")} />
						{errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
					</div>
					<div>
						<label className="text-sm">Email</label>
						<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="jane@company.com" type="email" {...register("email")} />
						{errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label className="text-sm">Country</label>
							<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="USA" {...register("country")} />
						</div>
						<div>
							<label className="text-sm">Phone</label>
							<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="+1 555-0100" {...register("phone")} />
						</div>
					</div>
					<div>
						<label className="text-sm">Project details</label>
						<textarea className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 min-h-32" placeholder="Describe what you want to build..." {...register("message")} />
						{errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
					</div>
					<button disabled={isSubmitting} className="px-5 py-3 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-60">Send</button>
				</form>
			</div>
			<div>
				<div className="glass rounded-2xl p-4">
					<p className="text-sm text-foreground/70">Location</p>
					<div className="mt-2 aspect-video rounded-xl overflow-hidden relative">
						<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/20" />
						<svg className="absolute inset-0" viewBox="0 0 400 200" preserveAspectRatio="none">
							<defs>
								<radialGradient id="g" cx="50%" cy="50%" r="50%">
									<stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
									<stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
								</radialGradient>
							</defs>
							<circle cx="200" cy="100" r="80" fill="url(#g)">
								<animate attributeName="r" values="60;90;60" dur="8s" repeatCount="indefinite" />
							</circle>
						</svg>
						<div className="absolute bottom-2 left-2 text-xs text-white/80">3D Map Placeholder</div>
					</div>
				</div>
			</div>
		</div>
	);
}