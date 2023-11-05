<script>
	import { isDarkMode } from '../store';
	import light from '$lib/images/light.svg';
	import dark from '$lib/images/dark.png';

	function toggleDarkMode() {
		// Updating the CSS Class
		const body = window.document.body;
		body.classList.toggle('dark__mode');

		// Updating the theme variable from the theme.js
		isDarkMode.update((/** @type {boolean} */ value) => !value);
	}
</script>

<button on:click={toggleDarkMode}>
	<img src={$isDarkMode ? dark : light} alt="Theme Icon" />
</button>

<!-- TODO: Fix the dark mode - moon background issue -->

<style>
	button {
		border: none;
		background-color: var(--color-background);
		height: 2.5rem;
		width: 2.5rem;
		margin: 0;
		padding: 0;
	}

	img {
		height: 100%;
		width: 100%;
	}

	@media (min-width: 1000px) {
		button {
			height: 2rem;
		}
	}
</style>
