<script>
	import { theme } from './theme';
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

<button
	class="flex p-0 w-12 h-10 mt-2 ml-2 lg:mt-0 justify-center items-center duration-500 ease-in-out no-underline text-sm leading-none hover:no-underline"
	on:click={toggleDarkMode}
>
	{#if $theme === 'Light'}
		<img src={dark} alt="Dark Mode Icon" />
	{:else}
		<img src={light} alt="Light Mode Icon" />
	{/if}
</button>

<style>
	img {
		@apply m-0 p-0 w-8;
	}
</style>
