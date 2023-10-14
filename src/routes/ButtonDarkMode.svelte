<script>
	import {theme} from './theme';

	function toggleDarkMode() {
		// Updating the CSS Class
		const body = window.document.body;
		body.classList.toggle('dark-mode');
		
		// Updating the theme variable from the theme.js
		theme.update(currentTheme => (currentTheme === 'Light' ? 'Dark' : 'Light'));
	}
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<button

	class="duration-500 ease-in-out no-underline inline-block text-sm px-4 py-2 leading-none hover:no-underline mt-4 lg:mt-0"
	on:click={toggleDarkMode}
>
	Light / Dark Mode
</button>

<style>
</style>
