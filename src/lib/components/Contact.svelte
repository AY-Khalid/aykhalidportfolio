<script lang="ts">
	import { reveal, magnetic } from '$lib/motion';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let sending = $state(false);
	let sent = $state(false);
	let error = $state('');

	function isValidEmail(v: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
	}
	function sanitize(v: string) {
		return v.replace(/[<>]/g, '').slice(0, 2000);
	}

	function submit(e: Event) {
		e.preventDefault();
		error = '';
		if (!name.trim() || name.length < 2) { error = 'What should I call you?'; return; }
		if (!isValidEmail(email)) { error = "That email looks off."; return; }
		if (!message.trim() || message.length < 8) { error = 'Tell me a bit more.'; return; }

		sending = true;
		const subject = encodeURIComponent(`Hello from ${sanitize(name)} (via your site)`);
		const body = encodeURIComponent(`${sanitize(message)}\n\n${sanitize(name)} (${sanitize(email)})`);
		window.location.href = `mailto:aniduyakubu@gmail.com?subject=${subject}&body=${body}`;
		setTimeout(() => { sending = false; sent = true; }, 400);
	}
</script>

<section id="contact" class="relative py-28 md:py-40">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-8">
		<div class="col-span-12 md:col-span-5">
			<div use:reveal class="neo-pill mb-3">05 · CONTACT</div>
			<h2 use:reveal={{ delay: 80 }} class="font-display text-4xl md:text-6xl leading-[0.95] mb-6">Get in<br/>touch.</h2>
			<p use:reveal={{ delay: 140 }} class="opacity-75 max-w-md mb-8">
				I'm currently open to remote roles, full-time or contract. The fastest way to reach me
				is email. I usually reply the same day if you catch me during working hours.
			</p>
			<div use:reveal={{ delay: 200 }} class="space-y-3">
				<a href="mailto:aniduyakubu@gmail.com" class="neo-raised-sm flex items-center gap-3 px-4 py-3 rounded-2xl hover:text-accent-sky transition-colors">
					<div class="neo-inset-sm w-9 h-9 rounded-xl grid place-items-center">
						<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
					</div>
					<span class="text-sm">aniduyakubu@gmail.com</span>
				</a>
				<a href="https://github.com/AY-Khalid" target="_blank" rel="noopener" class="neo-raised-sm flex items-center gap-3 px-4 py-3 rounded-2xl hover:text-accent-sky transition-colors">
					<div class="neo-inset-sm w-9 h-9 rounded-xl grid place-items-center">
						<svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
					</div>
					<span class="text-sm">github.com/AY-Khalid</span>
				</a>
				<a href="https://www.linkedin.com/in/anidu-yakubu-khalid-ab977821b/" target="_blank" rel="noopener" class="neo-raised-sm flex items-center gap-3 px-4 py-3 rounded-2xl hover:text-accent-sky transition-colors">
					<div class="neo-inset-sm w-9 h-9 rounded-xl grid place-items-center">
						<svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7h-3v-11h2.9v1.5c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5z"/></svg>
					</div>
					<span class="text-sm">LinkedIn profile</span>
				</a>
			</div>
		</div>

		<form use:reveal={{ delay: 80 }} onsubmit={submit} class="col-span-12 md:col-span-7 md:pl-8 space-y-5" novalidate>
			<div class="neo-inset rounded-3xl p-6 md:p-8 space-y-5">
				<div>
					<label for="c-name" class="block text-[10px] tracking-[0.25em] uppercase opacity-60 mb-2">Name</label>
					<input
						id="c-name"
						type="text"
						bind:value={name}
						maxlength="100"
						required
						class="neo-input text-base"
						placeholder="Your name"
						autocomplete="name"
					/>
				</div>
				<div>
					<label for="c-email" class="block text-[10px] tracking-[0.25em] uppercase opacity-60 mb-2">Email</label>
					<input
						id="c-email"
						type="email"
						bind:value={email}
						maxlength="160"
						required
						class="neo-input text-base"
						placeholder="you@company.com"
						autocomplete="email"
					/>
				</div>
				<div>
					<label for="c-msg" class="block text-[10px] tracking-[0.25em] uppercase opacity-60 mb-2">Message</label>
					<textarea
						id="c-msg"
						rows="5"
						bind:value={message}
						maxlength="2000"
						required
						class="neo-input text-base resize-none"
						placeholder="What's on your mind?"
					></textarea>
				</div>

				{#if error}
					<p role="alert" class="text-sm text-red-500">{error}</p>
				{/if}
				{#if sent}
					<p role="status" class="text-sm text-emerald-500">Your mail app should have opened. If it didn't, just email me at aniduyakubu@gmail.com.</p>
				{/if}

				<button
					use:magnetic={0.2}
					type="submit"
					disabled={sending}
					class="solid-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold disabled:opacity-60"
				>
					{sending ? 'Opening your mail app…' : 'Send it'}
					<span aria-hidden="true">→</span>
				</button>
			</div>
		</form>
	</div>
</section>
