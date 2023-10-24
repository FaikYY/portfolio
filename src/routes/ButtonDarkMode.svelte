<script>
	import { isDarkMode } from './store';
	import light from '$lib/images/light.svg';
	import dark from '$lib/images/dark.png';

	function toggleDarkMode() {
		// Updating the CSS Class
		const body = window.document.body;
		body.classList.toggle('dark__mode');

		// Updating the theme variable from the theme.js
		isDarkMode.update((value) => !value);
	}
</script>

<button on:click={toggleDarkMode} style="width: 48px; height: 42px;">
	<img class="h-full w-full" src={$isDarkMode ? dark : light} alt="Mode Icon" />
</button>
