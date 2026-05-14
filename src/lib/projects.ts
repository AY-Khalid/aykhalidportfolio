export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	tags: string[];
	repo: string;
	demo?: string;
	year: string;
	accent: 'lime' | 'sky' | 'amber' | 'stone' | 'earth';
	role: string;
	/**
	 * Screenshot paths (relative to /static).
	 * Drop your images into  /static/projects/<slug>/<n>.png  (or .jpg/.webp).
	 * First entry is used as the card thumbnail. The full list is shown
	 * in the case-detail modal as a horizontal gallery.
	 */
	images: string[];
};

export const projects: Project[] = [
	{
		slug: 'docagent',
		title: 'DocAgent',
		tagline: 'AI clinical assistant for healthcare workflows',
		description:
			'An LLM agent layered over structured medical context. It helps with documentation and decision support but always leaves the clinician in the loop. I cared a lot about getting the retrieval right so it doesn\'t hallucinate dosages.',
		tags: ['Python', 'LLM', 'NLP', 'Healthcare'],
		repo: 'https://github.com/AY-Khalid/DocAgent',
		year: '2025',
		accent: 'lime',
		role: 'Designed the agent flow, wrote the prompt scaffolding, set up retrieval over medical context.',
		images: [
			'/projects/docagent/1.png',
			'/projects/docagent/2.png'
		]
	},
	{
		slug: 'accessible-finance',
		title: 'Accessible Finance',
		tagline: 'Loans for Nigerian farmers, built in a weekend',
		description:
			'Hackathon project tackling last-mile access to affordable credit for smallholder farmers. End to end build: scoring logic, loan state machine, and a UI that actually works on bad rural connections.',
		tags: ['FinTech', 'Full-Stack', 'Python', 'Scoring'],
		repo: 'https://github.com/AY-Khalid/accessable_finance_hackathon',
		year: '2025',
		accent: 'sky',
		role: 'Built the scoring engine, the loan workflow, and the mobile-first UI.',
		images: [
			'/projects/accessible-finance/1.png',
			'/projects/accessible-finance/2.png'
		]
	},
	{
		slug: 'ai-quran',
		title: 'AI Powered Quran',
		tagline: 'Semantic search over Quranic text',
		description:
			'NLP applied to a domain that demands accuracy and respect. Semantic search, classification, and context exploration. I spent more time on the evaluation harness than the model.',
		tags: ['NLP', 'ML', 'Python', 'Embeddings'],
		repo: 'https://github.com/AY-Khalid/AI_Powered_Quran',
		year: '2024',
		accent: 'amber',
		role: 'Embedding pipeline, evaluation harness, query interface.',
		images: [
			'/projects/ai-quran/1.png'
		]
	},
	{
		slug: 'commerce',
		title: 'Commerce (Auctions)',
		tagline: 'Django auction site with bids and watchlists',
		description:
			'Listings, bid logic, watchlists, comments, categories. Full CRUD with auth and sessions. Nothing flashy, but the bid concurrency was a fun problem to get right.',
		tags: ['Django', 'Python', 'Auth', 'PostgreSQL'],
		repo: 'https://github.com/AY-Khalid/commerce',
		year: '2024',
		accent: 'stone',
		role: 'Full-stack build, schema design, bid concurrency.',
		images: [
			'/projects/commerce/1.png',
			'/projects/commerce/2.png'
		]
	},
	{
		slug: 'rainfall',
		title: 'Rainfall Prediction',
		tagline: 'Supervised ML on historical weather data',
		description:
			'Feature engineering, model comparison, evaluation. Reproducible notebook pipeline. Honest baselines beat fancy ones more often than people admit.',
		tags: ['ML', 'pandas', 'scikit-learn'],
		repo: 'https://github.com/AY-Khalid/Rain-Fall-Prediction',
		year: '2024',
		accent: 'earth',
		role: 'Data wrangling, model selection, evaluation notebook.',
		images: [
			'/projects/rainfall/1.png'
		]
	},
	{
		slug: 'habit-tracker',
		title: 'Habit Tracker',
		tagline: 'My HNG 2026 internship build',
		description:
			'TypeScript habit tracker with persistence and a calm, opinionated UI. Built fast, shipped clean. Currently the app I actually use to track my own habits.',
		tags: ['TypeScript', 'Vite', 'PWA'],
		repo: 'https://github.com/AY-Khalid/habit-tracker',
		year: '2026',
		accent: 'lime',
		role: 'Whole app: architecture, state, UI, persistence.',
		images: [
			'/projects/habit-tracker/1.png',
			'/projects/habit-tracker/2.png'
		]
	}
];

export const moreLinks = [
	{ title: 'Student Score Prediction', desc: 'Regression model predicting student performance from learning behaviour.', repo: 'https://github.com/AY-Khalid/STUDENT_SCORE_PREDICTION' },
	{ title: 'California Crimes Analysis', desc: 'Pattern and risk analysis on a large public dataset.', repo: 'https://github.com/AY-Khalid/crimes-in-California' },
	{ title: 'Dash Analytics App', desc: 'Interactive Plotly Dash dashboard for refreshable data exploration.', repo: 'https://github.com/AY-Khalid/DashApp' },
	{ title: 'Invoice Management', desc: 'Full-stack invoicing: line items, totals, persistence, clean forms.', repo: 'https://github.com/AY-Khalid/invoice-management' },
	{ title: 'Bellabeat Capstone', desc: 'Google Data Analytics capstone done in SQLite.', repo: 'https://github.com/AY-Khalid/Google-capstone-case-study-2.-Bellabeat-Sqlite3-documentations' },
	{ title: 'Paga Landing Page', desc: 'Pixel-faithful clone of a Nigerian fintech landing page.', repo: 'https://github.com/AY-Khalid/paga-landing-page' }
];
