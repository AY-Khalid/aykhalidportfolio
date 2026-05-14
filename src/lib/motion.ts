import { browser } from '$app/environment';

export function prefersReducedMotion(): boolean {
	if (!browser) return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** IntersectionObserver-based reveal action. Adds `data-revealed` when in view. */
export function reveal(node: HTMLElement, opts: { threshold?: number; delay?: number } = {}) {
	if (!browser) return {};
	const { threshold = 0.15, delay = 0 } = opts;
	node.style.opacity = '0';
	node.style.transform = 'translateY(28px)';
	node.style.transition = `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`;
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					node.setAttribute('data-revealed', 'true');
					io.disconnect();
				}
			}
		},
		{ threshold }
	);
	io.observe(node);
	return { destroy() { io.disconnect(); } };
}

/** Magnetic hover effect for buttons */
export function magnetic(node: HTMLElement, strength = 0.35) {
	if (!browser || prefersReducedMotion()) return {};
	let raf = 0;
	const onMove = (e: MouseEvent) => {
		const r = node.getBoundingClientRect();
		const dx = (e.clientX - (r.left + r.width / 2)) * strength;
		const dy = (e.clientY - (r.top + r.height / 2)) * strength;
		cancelAnimationFrame(raf);
		raf = requestAnimationFrame(() => {
			node.style.transform = `translate(${dx}px, ${dy}px)`;
		});
	};
	const onLeave = () => {
		cancelAnimationFrame(raf);
		node.style.transform = 'translate(0,0)';
	};
	node.addEventListener('mousemove', onMove);
	node.addEventListener('mouseleave', onLeave);
	return {
		destroy() {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
		}
	};
}

/** Parallax tilt on hover (subtle 3D lift). */
export function tilt(node: HTMLElement, max = 8) {
	if (!browser || prefersReducedMotion()) return {};
	node.style.transformStyle = 'preserve-3d';
	const onMove = (e: MouseEvent) => {
		const r = node.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - 0.5;
		const py = (e.clientY - r.top) / r.height - 0.5;
		node.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateZ(0)`;
	};
	const reset = () => {
		node.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
	};
	node.addEventListener('mousemove', onMove);
	node.addEventListener('mouseleave', reset);
	return {
		destroy() {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', reset);
		}
	};
}
