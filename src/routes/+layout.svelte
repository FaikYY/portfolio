<script>
	import {screenSize} from './store';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:window bind:innerWidth={$screenSize} />
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="">
		{#if $screenSize < 450}
		<p class="text-sm">Created by <strong>Faik Yesilyaprak</strong> <br>with <strong>SvelteKit</strong> and  🫀 🧠	</p>
		{:else}
		<p class="text-sm">Created by <strong>Faik Yesilyaprak</strong> with <strong>SvelteKit</strong> and 🫀 🧠	</p>
		{/if}
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		text-align: center;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
