<script>
	import leaf from '$lib/images/leaf.png';
	import Navbar from './Navbar.svelte';

	$: isCollapsed = false;

	function toggleCollapse() {
		isCollapsed = !isCollapsed;
	}
</script>

<!-- //TODO: Sample todo -->

<header>
	<div id="icon__leaf__box">
		<img id="icon__leaf" src={leaf} alt="Logo" />
	</div>
	<div id="logo" class=" flex items-center justify-center text-2xl font-bold">Faik Yesilyaprak</div>
	<Navbar />
</header>

<style>
	header {
		grid-area: header;
		top: 0;
		position: sticky;
		box-shadow: 0 6px 6px rgba(29, 48, 64, 0.1);
		max-width: 100vw;
		z-index: 1;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	#logo {
		/* background-color: red; */
		text-align: center;
	}

	#icon__leaf {
		width: 26px;
	}

	@media (640px <= width <= 840px) {
		header {
			position: sticky;
			/* height: 10vw; */
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 6px 6px rgba(29, 48, 64, 0.05);
			padding-left: 2rem;
			z-index: 4;
		}

		#logo {
			flex-grow: 2;
			font-size: clamp(1.25rem, 2vw, 1.75rem);
		}

		#icon__leaf {
			width: 30px;
			height: 30px;
		}
	}
</style>
