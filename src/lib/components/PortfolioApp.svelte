<script lang="ts">
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Marquee from './Marquee.svelte';
	import About from './About.svelte';
	import Stack from './Stack.svelte';
	import Projects from './Projects.svelte';
	import Credentials from './Credentials.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<main id="main" class="relative">
	<Hero />
	<Marquee />
	<About />
	<Stack />
	<Projects />
	<Credentials />
	<Contact />
</main>
<Footer />
