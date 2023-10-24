<script>
	import leaf from '$lib/images/leaf.png';
	import Navbar from './Navbar.svelte';

	$: isCollapsed = false;

	function toggleCollapse() {
		isCollapsed = !isCollapsed;
	}
</script>

<!-- //TODO: Sample todo -->

<header class="">
	<img id="leaf__icon" src={leaf} alt="Logo" />
	<div id="logo" class=" flex items-center justify-center text-2xl font-bold">Faik Yesilyaprak</div>
	<!-- MENU ITEMS DESKTOP-->
	<Navbar />
</header>

<style>
	header {
		grid-area: header;
		top: 0;
		position: sticky;
		box-shadow: 0 6px 6px rgba(29, 48, 64, 0.1);
		max-width: 100vw;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	#logo {
		/* background-color: red; */
		text-align: center;
	}

	#leaf__icon {
		scale: 50%;
	}
</style>
