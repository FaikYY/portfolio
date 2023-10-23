<script>
	import { theme } from './store';
	import light from '$lib/images/light.svg';
	import dark from '$lib/images/dark.png';

	function toggleDarkMode() {
		// Updating the CSS Class
		const body = window.document.body;
		body.classList.toggle('dark-mode');

		// Updating the theme variable from the theme.js
		theme.update((currentTheme) => (currentTheme === 'Light' ? 'Dark' : 'Light'));
	}
</script>

<button style="background: none;" on:click={toggleDarkMode}>
	{#if $theme === 'Light'}
		<img class="w-12" src={light} alt="Light Mode Icon" />
	{:else}
		<img class="w-12" style="filter:invert(25%)" src={dark} alt="Dark Mode Icon" />
	{/if}
</button>
