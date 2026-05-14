<script lang="ts">
	import { reveal } from '$lib/motion';
	const stats = [
		{ k: '3+', v: 'Years remote', accent: '#A8D958' },
		{ k: '25+', v: 'Repos shipped', accent: '#2E8FB8' },
		{ k: '5', v: 'Certifications', accent: '#E89A3C' },
		{ k: '∞', v: 'Cups of coffee', accent: '#7A5236' }
	];
</script>

<section id="about" class="relative py-28 md:py-40">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-8">
		<div class="col-span-12 md:col-span-3">
			<div use:reveal class="neo-pill mb-3">01 · ABOUT</div>
			<h2 use:reveal={{ delay: 100 }} class="font-display text-3xl md:text-4xl leading-tight">About me.</h2>
		</div>
		<div class="col-span-12 md:col-span-9 md:pl-8">
			<div use:reveal class="neo-raised rounded-3xl p-7 md:p-10">
				<p class="text-lg md:text-2xl leading-relaxed max-w-3xl">
					I don't really like calling myself one thing. I write a lot of frontend, I do a lot of
					data and ML work, and I enjoy the messy bit in between where the model has to
					actually meet a user.
				</p>
				<p class="mt-5 text-base md:text-lg leading-relaxed opacity-80 max-w-3xl">
					I've been working remotely for about three years now. I started out doing analytics
					and finance modelling at a small seed-stage startup, building the SQL and Excel
					sheets the founders used to figure out runway and pricing. After a while I got
					curious about what was upstream of all those spreadsheets, so I went deep on
					ML and AI. I did the IBM Data Science track, Google Advanced Data Analytics,
					and the 3MTT ML/AI programme, and along the way I shipped projects like
					<em class="not-italic font-semibold">DocAgent</em>, an AI assistant for clinicians,
					and <em class="not-italic font-semibold">AI Powered Quran</em>, an NLP project I
					cared a lot about.
				</p>
				<p class="mt-5 text-base md:text-lg leading-relaxed opacity-80 max-w-3xl">
					These days I spend most of my time on the product side, working in Next.js,
					TypeScript, and FastAPI. I'm currently in the HNG Frontend Internship cohort. What
					I keep coming back to is the same set of things: clean APIs, fast pages, code that
					still reads well at 2am, and interfaces that feel like someone actually thought about
					them.
				</p>
			</div>

			<div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-5">
				{#each stats as s, i}
					<div use:reveal={{ delay: 80 + i * 60 }} class="neo-raised rounded-2xl p-5">
						<div class="w-2 h-2 rounded-full mb-3" style="background: {s.accent}"></div>
						<div class="font-display text-3xl md:text-4xl">{s.k}</div>
						<div class="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-60 mt-1">{s.v}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
