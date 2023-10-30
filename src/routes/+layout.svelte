<script>
	import Header from './Header.svelte';
	import IconBox from './IconBox.svelte';
	import '../styles.css';
	import { isDarkMode } from './store';
</script>

<!-- //TODO: Make header sticky -->
<!-- //TODO: Replace footer with navbar -->

<div class="app" class:dark-mode-shadow={$isDarkMode}>
	<Header />
	<IconBox />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Created by using <a
				target="_blank"
				style="text-decoration-line: underline; text-decoration-thickness: .1rem;  text-decoration-style:underline;"
				href="https://kit.svelte.dev/">SvelteKit</a
			> with ❤️ 🧠
		</p>
	</footer>
</div>

<style>
	/* 
	//SECTION: LAYOUT 
	*/
	.app {
		width: 100vw;
		min-height: 100vh;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: minmax(4em, auto) minmax(2em, auto) 1fr minmax(4em, auto);
		grid-template-areas:
			'header header header header'
			'footer footer footer footer'
			'main main main main'
			'iconbox iconbox iconbox iconbox';
	}

	main {
		height: 100%;
		grid-area: main;
	}

	footer {
		grid-area: footer;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		padding-bottom: 0;
	}

	footer p {
		font-size: clamp(0.75rem, 1.5vw, 1rem);
	}

	/* //SECTION: sm size: Tablet */
	@media (640px <= width <= 840px) {
		.app {
			grid-template-rows: minmax(4em, auto) minmax(2em, auto) 1fr minmax(4em, auto);
			grid-template-columns: 1fr 1fr 1fr 7.5vw;
			grid-template-areas:
				'header header header header'
				'footer footer footer iconbox'
				'main main main iconbox'
				'main main main iconbox';
		}
	}

	/* //SECTION: md size: Big Tablet - Laptop PC */
	@media (width > 840px) {
		.app {
			grid-template-columns: 1fr 1fr 1fr 1fr 4rem;
			grid-template-rows: minmax(6em, auto) minmax(4em, auto) 1fr minmax(2em, auto);
			grid-template-areas:
				'header header header iconbox iconbox'
				'main main main main main'
				'main main main main main'
				'footer footer footer footer footer';
		}
	}

	/* //SECTION: lg size: Laptop Small */
	@media (min-width: 1024px) {
	}

	/* //SECTION: xl size: Laptop Medium */
	@media (min-width: 1280px) {
	}

	/* //SECTION: 2xl size: Laptop Large */
	@media (min-width: 1536px) {
	}
</style>
