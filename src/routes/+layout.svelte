<script>
	import Header from './Header.svelte';
	import IconBox from './IconBox.svelte';
	import '../styles.css';
</script>

<!-- //TODO: Make header sticky -->
<!-- //TODO: Replace footer with navbar -->

<div class="app">
	<Header />
	<IconBox />

	<main>
		<slot />
	</main>

	<footer>
		<p class="text-sm">
			Created by <strong>Faik Yesilyaprak</strong> with <strong>SvelteKit</strong> and ❤️ 🧠
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
		width: 100%;
		height: 100vh;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 6em 4em 1fr 3em;
		grid-template-areas:
			'header header header header'
			'iconbox iconbox iconbox iconbox'
			'main main main main'
			'footer footer footer footer';
	}

	:global(header) {
		grid-area: header;
		/* top: 0;
		position: sticky; */
	}

	:global(#icon__box) {
		grid-area: iconbox;
		/* top: 0;
		position: sticky; */
		/* background-color: var(--color-light); */
	}

	:global(nav) {
		display: none !important;
	}

	main {
		grid-area: main;
	}

	footer {
		grid-area: footer;
		background-color: bisque;
		display: flex;
		justify-content: center;
		align-items: center;

		bottom: 0;
		position: sticky;
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
