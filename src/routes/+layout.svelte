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
		<p class="text-sm">
			Created by using <strong>SvelteKit</strong> with ❤️ 🧠
		</p>
	</footer>
</div>

<style>
	/* 
	//SECTION: LAYOUT
	██       █████  ██    ██  ██████  ██    ██ ████████ 
	██      ██   ██  ██  ██  ██    ██ ██    ██    ██    
	██      ███████   ████   ██    ██ ██    ██    ██    
	██      ██   ██    ██    ██    ██ ██    ██    ██    
	███████ ██   ██    ██     ██████   ██████     ██    
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

	/* //SECTION: sm size: Phone */
	@media (min-width: 640px) {
	}

	/* //SECTION: md size: Tablet */
	@media (min-width: 768px) {
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
