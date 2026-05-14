<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { prefersReducedMotion } from '$lib/motion';

	let canvas: HTMLCanvasElement;
	let frame = 0;
	let cleanup: (() => void) | null = null;

	onMount(async () => {
		if (!browser) return;
		const reduce = prefersReducedMotion();
		const THREE = await import('three');

		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x0b0b0b, 6, 22);

		const camera = new THREE.PerspectiveCamera(
			55,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			60
		);
		camera.position.set(0, 0, 7);

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

		// Read theme colors from CSS so the scene re-themes
		function getThemeColors() {
			const dark = document.documentElement.classList.contains('dark');
			return {
				base: dark ? 0x1f2126 : 0xf1e8d5,
				mat:  dark ? 0xf1e8d5 : 0x1a1a1a,
				accent: 0xa8d958
			};
		}
		let colors = getThemeColors();
		renderer.setClearColor(colors.base, 0);

		// Lighting
		const amb = new THREE.AmbientLight(0xffffff, 0.55);
		const dir = new THREE.DirectionalLight(0xffffff, 1.1);
		dir.position.set(3, 4, 5);
		const rim = new THREE.PointLight(0xa8d958, 1.2, 14);
		rim.position.set(-3, -2, 3);
		scene.add(amb, dir, rim);

		// Geometry pool. Floating wireframe knots and icosahedra.
		const group = new THREE.Group();
		scene.add(group);

		const mat1 = new THREE.MeshStandardMaterial({
			color: colors.mat,
			metalness: 0.2,
			roughness: 0.35,
			wireframe: true
		});
		const mat2 = new THREE.MeshStandardMaterial({
			color: colors.accent,
			metalness: 0.5,
			roughness: 0.15,
			emissive: 0x2a3a10,
			emissiveIntensity: 0.4
		});
		const mat3 = new THREE.MeshStandardMaterial({
			color: colors.mat,
			metalness: 0.9,
			roughness: 0.1
		});

		const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.05, 0.32, 180, 24), mat1);
		const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 0), mat2);
		const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 24), mat3);
		ico.position.set(2.2, 1.1, 0.5);
		sphere.position.set(-2.4, -0.8, 0.2);

		group.add(knot, ico, sphere);

		// Drifting particle field
		const N = reduce ? 80 : 260;
		const pos = new Float32Array(N * 3);
		for (let i = 0; i < N; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 14;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
		}
		const pg = new THREE.BufferGeometry();
		pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
		const pm = new THREE.PointsMaterial({
			color: colors.mat,
			size: 0.025,
			transparent: true,
			opacity: 0.55
		});
		const points = new THREE.Points(pg, pm);
		scene.add(points);

		// Pointer parallax
		const target = { x: 0, y: 0 };
		const onMove = (e: MouseEvent) => {
			target.x = (e.clientX / window.innerWidth - 0.5) * 2;
			target.y = (e.clientY / window.innerHeight - 0.5) * 2;
		};
		window.addEventListener('mousemove', onMove, { passive: true });

		// Resize
		const resize = () => {
			const w = canvas.clientWidth;
			const h = canvas.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h, false);
		};
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		// Theme observer. React to .dark toggling.
		const mo = new MutationObserver(() => {
			colors = getThemeColors();
			mat1.color.setHex(colors.mat);
			mat3.color.setHex(colors.mat);
			(points.material as THREE.PointsMaterial).color.setHex(colors.mat);
		});
		mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		const clock = new THREE.Clock();
		let lastT = 0;

		function loop() {
			const t = clock.getElapsedTime();
			const dt = t - lastT;
			lastT = t;

			if (!reduce) {
				knot.rotation.x += dt * 0.25;
				knot.rotation.y += dt * 0.18;
				ico.rotation.x -= dt * 0.4;
				ico.rotation.z += dt * 0.3;
				sphere.position.y = -0.8 + Math.sin(t * 1.2) * 0.25;
				points.rotation.y += dt * 0.02;
			}

			// Parallax tilt
			group.rotation.y += (target.x * 0.25 - group.rotation.y) * 0.05;
			group.rotation.x += (-target.y * 0.18 - group.rotation.x) * 0.05;

			renderer.render(scene, camera);
			frame = requestAnimationFrame(loop);
		}
		frame = requestAnimationFrame(loop);

		cleanup = () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('mousemove', onMove);
			ro.disconnect();
			mo.disconnect();
			[knot, ico, sphere].forEach((m) => {
				m.geometry.dispose();
				(m.material as THREE.Material).dispose();
			});
			pg.dispose();
			pm.dispose();
			renderer.dispose();
		};
	});

	onDestroy(() => cleanup?.());
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full block" aria-hidden="true"></canvas>
