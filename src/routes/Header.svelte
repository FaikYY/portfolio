<script>
	import { page } from '$app/stores';

	import leaf from '$lib/images/leaf.png';

	$: isCollapsed = false;

	function toggleCollapse() {
		isCollapsed = !isCollapsed;
	}
</script>

<!-- //TODO: Sample todo -->

<header class="flex items-center justify-center">
	<div class=" flex items-center justify-center text-3xl font-bold">
		Faik <img src={leaf} alt="Logo" class="ml-2 scale-75" />
	</div>

	<!-- MENU ITEMS DESKTOP-->
	<nav class="w-full flex-grow lg:ml-6 lg:flex lg:w-auto lg:items-center">
		<div class="text-sm lg:flex-grow">
			<a
				href="/"
				class="mr-4 mt-4 block rounded-md p-2 text-lg no-underline duration-500 ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
				aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			>
				Home
			</a>
			<a
				href="/projects"
				class="mr-4 mt-4 block rounded-md p-2 text-lg no-underline duration-500 ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
			>
				Projects
			</a>
			<a
				href="/about"
				class="mr-4 mt-4 block rounded-md p-2 text-lg no-underline duration-500 ease-in-out hover:no-underline lg:mt-0 lg:inline-block"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				About Me
			</a>
		</div>
	</nav>
</header>
