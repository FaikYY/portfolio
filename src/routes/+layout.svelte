<script>
	import { page } from '$app/stores';
	import '../app.css';
	import IconBox from './IconBox.svelte';
</script>

<!-- TODO: Add the leaf icon on the header -->

<div class="container">
	<header>
		<div id="logo">Faik Yesilyaprak</div>

		<nav>
			<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}> Home </a>
			<a href="/projects" aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				Projects
			</a>
			<a href="/about" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				About Me
			</a>

			<a href="/faqs" aria-current={$page.url.pathname === '/faqs' ? 'page' : undefined}> FAQs </a>
		</nav>
	</header>

	<main>
		<slot />
		<footer>Created by Faik Yesilyaprak with ❤️ 🧠</footer>
	</main>

	<IconBox />
</div>

<style>
	.container {
		/* background: red; */
		gap: calc(16px + 1vw);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: calc(7.5vh + 7.5vw) 1fr;
		width: 100vw;
		height: 100%;
		min-height: 100%;
		box-sizing: border-box;
		overflow-x: hidden;
	}

	header {
		background-color: var(--color-background);
		grid-column: 2/12;
		display: flex;
		justify-content: space-around;
		align-items: center;

		display: flex;
		flex-direction: column;

		position: sticky;
		top: 0;
	}

	nav {
		/*   background: purple; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	a {
		font-weight: 700;
		transition: var(--transition);
		background-color: var(--color-background);
		color: var(--color-foreground);
	}

	a:hover {
		padding: 0.75rem 1.25rem;
		border-radius: 0.5rem;
		background-color: var(--color-foreground);
		color: var(--color-background);
	}

	main {
		/* background: blue; */
		grid-column: 2/12;
	}

	#logo {
		/* background: yellow; */
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		font-size: 1.5rem;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}
</style>
