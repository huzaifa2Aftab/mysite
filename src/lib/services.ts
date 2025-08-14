export type Service = {
	slug: string;
	title: string;
	description: string;
	stack: string[];
	useCases: string[];
	cta?: string;
};

export const services: Service[] = [
	{
		slug: "web-development",
		title: "Website Development",
		description:
			"High-performance websites with modern stacks, SEO, accessibility, and delightful UX.",
		stack: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
		useCases: [
			"Marketing sites and landing pages",
			"Documentation and blogs with MDX",
			"E-commerce with headless CMS",
			"Dashboards and internal tools",
		],
	},
	{
		slug: "app-development",
		title: "App Development",
		description:
			"Cross-platform mobile apps with native performance and polished experiences.",
		stack: ["Flutter", "React Native", "Swift", "Kotlin"],
		useCases: [
			"MVPs and prototypes",
			"Consumer and enterprise apps",
			"Device integrations and sensors",
			"App store deployment and CI/CD",
		],
	},
	{
		slug: "machine-learning",
		title: "Machine Learning Solutions",
		description:
			"From data to insights: model development, training, and deployment at scale.",
		stack: ["TensorFlow", "PyTorch", "scikit-learn"],
		useCases: [
			"Classification and regression",
			"Recommendation systems",
			"Computer vision and NLP",
			"MLOps and monitoring",
		],
	},
	{
		slug: "ai-agents",
		title: "AI Agents",
		description:
			"Autonomous agents that plan, reason, and act with tools and workflows.",
		stack: ["LangChain", "OpenAI API", "Rasa", "n8n", "Zapier", "Make (Integromat)"],
		useCases: [
			"Customer support assistants",
			"Sales and outreach automation",
			"Workflow automation with n8n/Zapier/Make",
			"Retrieval augmented generation (RAG)",
		],
	},
	{
		slug: "data-analysis",
		title: "Data Analysis",
		description:
			"Analytics pipelines, dashboards, and decision support with trusted tooling.",
		stack: ["Pandas", "NumPy", "Power BI", "Tableau"],
		useCases: [
			"Data wrangling and reporting",
			"Executive dashboards",
			"KPI tracking and anomaly detection",
			"Interactive visualizations",
		],
	},
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}