<script>
	import { isHamburgerExpanded } from './store';
	import { page } from '$app/stores';

	function toggleMenu() {
		$isHamburgerExpanded = !$isHamburgerExpanded;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <div on:click={toggleMenu} class="menu__btn" class:burger__animation={$isHamburgerExpanded} /> -->
<div on:click={toggleMenu} class="menu__btn" class:burger__animation={$isHamburgerExpanded}>
	<div class="hamburger__bar"></div>
	<div class="hamburger__bar"></div>
	<div class="hamburger__bar"></div>
</div>

<nav
	class="menu__box w-full flex-grow lg:ml-6 lg:flex lg:w-auto lg:items-center"
	class:menu__box-toggle={$isHamburgerExpanded}
>
	<a
		href="/"
		class="menu__item mr-4 mt-4 block rounded-md p-2 text-lg no-underline ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}
	>
		Home
	</a>
	<a
		href="/projects"
		class="menu__item mr-4 mt-4 block rounded-md p-2 text-lg no-underline ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
		aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
	>
		Projects
	</a>
	<a
		href="/about"
		class="menu__item mr-4 mt-4 block rounded-md p-2 text-lg no-underline ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
		aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
	>
		About Me
	</a>
</nav>

<style>
	.menu__box-toggle {
		left: 0 !important;
	}

	/* //SECTION: Mobile Menu and Items  */
	.menu__box {
		display: block;
		position: fixed;
		top: 0;
		left: -100%;
		width: 300px;
		height: 100%;
		margin: 0;
		padding: 80px 0;
		list-style: none;
		background-color: #eceff1;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		transition: 0.3s ease;
	}
	.menu__item {
		display: block;
		padding: 12px 24px;
		color: #333;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;
		transition: 0.3s ease;
	}
	.menu__item:hover {
		background-color: #cfd8dc;
	}
	/* ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ */

	/* //SECTION: Draw the hamburger menu  */
	.menu__btn {
		right: 0;
		width: 26px;
		height: 50%;
		cursor: pointer;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
		transition: 0.3s ease;
	}

	.hamburger__bar {
		height: 4px;
		width: 26px;
		background-color: #616161;
		transition: 0.3s ease;
	}

	.burger__animation {
		transform: rotate(45deg);
	}

	.burger__animation .hamburger__bar:nth-child(1) {
		transform: rotate(0deg) translate(4px, 4px);
	}

	.burger__animation .hamburger__bar:nth-child(2) {
		opacity: 0; /* Hide the middle bar */
	}

	.burger__animation .hamburger__bar:nth-child(3) {
		transform: rotate(90deg) translate(-14px, -4px);
	}
	/* ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ */
</style>
