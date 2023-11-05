<script>
	import { isDarkMode } from '../store';

	const light = '☀️';
	const dark = '🌙';

	function toggleDarkMode() {
		// Updating the CSS Class
		const body = window.document.body;
		body.classList.toggle('dark__mode');

		// Updating the theme variable from the theme.js
		isDarkMode.update((/** @type {boolean} */ value) => !value);
	}
</script>

<button on:click={toggleDarkMode}>
	{$isDarkMode ? dark : light}
</button>

<style>
	button {
		border: none;
		background-color: var(--color-background);
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		height: 2.5rem;
	}

	@media (min-width: 1000px) {
		button {
			height: 2rem;
		}
	}
</style>
