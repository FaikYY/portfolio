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
<div on:click={toggleMenu} class="hamburger__btn" class:burger__animation={$isHamburgerExpanded}>
	<div class="hamburger__bar"></div>
	<div class="hamburger__bar"></div>
	<div class="hamburger__bar"></div>
</div>

<nav
	class="w-full flex-grow lg:ml-6 lg:flex lg:w-auto lg:items-center"
	class:menu__box-toggle={$isHamburgerExpanded}
>
	<a
		href="/"
		class="menu__item"
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}
		on:click={toggleMenu}
	>
		Home
	</a>
	<a
		href="/projects"
		class="menu__item"
		aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
		on:click={toggleMenu}
	>
		Projects
	</a>
	<a
		href="/about"
		class="menu__item"
		aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
		on:click={toggleMenu}
	>
		About Me
	</a>
</nav>

<style>
	.menu__box-toggle {
		left: 0 !important;
	}

	/* //SECTION: Mobile Menu and Items  */
	nav {
		display: block;
		position: fixed;
		top: 0;
		left: -100%;
		width: 300px;
		height: 100%;
		margin: 0;
		padding: 80px 0;
		list-style: none;

		background-color: var(--color-background);

		box-shadow: 2px 2px 6px rgba(29, 48, 64, 0.2);
		transition: 0.3s ease;
		border-radius: 10px;
	}
	.menu__item {
		display: block;
		margin-top: 1rem;
		font-size: 1rem;
		padding: 12px 24px;
		font-weight: 600;
		text-decoration: none;
		transition: 0.3s ease;
	}
	.menu__item:hover {
		background-color: var(--color-foreground);
		color: var(--color-background);
	}

	/* //SECTION: Draw the hamburger menu  */
	.hamburger__btn {
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
		border-radius: 10px;
		height: 4px;
		width: 26px;
		background-color: var(--color-foreground);
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

	@media (640px <= width <= 1080px) {
		.menu__item {
			margin: 0;
			padding: 12px 34px;
		}
		.hamburger__btn {
			display: none;
		}

		nav {
			position: static;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			flex-grow: 6;
			box-shadow: none;
			transition: 0.3s ease;
			border-radius: 10px;
			height: 10vw;
			padding: 0;
		}
	}
</style>
