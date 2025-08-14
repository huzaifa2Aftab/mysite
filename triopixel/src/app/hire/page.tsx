"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional(),
	country: z.string().optional(),
	company: z.string().optional(),
	budget: z.string().optional(),
	timeline: z.string().optional(),
	description: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function HirePage() {
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

	async function onSubmit(data: FormData) {
		const res = await fetch("/api/hire", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
		if (res.ok) {
			reset();
			alert("Thanks! We'll reach out to scope your project.");
		} else {
			alert("Submission failed");
		}
	}

	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<h1 className="text-3xl md:text-4xl font-bold">Hire us</h1>
			<p className="mt-2 text-foreground/70">Share your vision, timeline, and constraints. We'll craft a plan and quote.</p>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="md:col-span-1">
					<label className="text-sm">Name</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="Jane Doe" {...register("name")} />
					{errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
				</div>
				<div>
					<label className="text-sm">Email</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="jane@company.com" type="email" {...register("email")} />
					{errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
				</div>
				<div>
					<label className="text-sm">Phone</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="+1 555-0100" {...register("phone")} />
				</div>
				<div>
					<label className="text-sm">Country</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="USA" {...register("country")} />
				</div>
				<div>
					<label className="text-sm">Company</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="Acme Inc." {...register("company")} />
				</div>
				<div>
					<label className="text-sm">Budget</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="$10k - $50k" {...register("budget")} />
				</div>
				<div>
					<label className="text-sm">Timeline</label>
					<input className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10" placeholder="6-8 weeks" {...register("timeline")} />
				</div>
				<div className="md:col-span-2">
					<label className="text-sm">Project Description</label>
					<textarea className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 min-h-40" placeholder="What do you want to build? Goals, features, and constraints..." {...register("description")} />
					{errors.description && <p className="text-xs text-red-400 mt-1">{errors.description.message}</p>}
				</div>
				<div className="md:col-span-2 flex items-center gap-3">
					<button disabled={isSubmitting} className="px-5 py-3 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-60">Request Quote</button>
					<a href="/services" className="px-5 py-3 rounded-md border border-white/15 hover:bg-white/10">Explore services</a>
				</div>
			</form>
		</div>
	);
}