<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	$: isCollapsed = false;
	let screenSize = 0;

	function toggleCollapse(){
		isCollapsed = !isCollapsed;
	}
</script>

<svelte:window bind:innerWidth={screenSize}/>

<nav class="flex items-center justify-between flex-wrap p-6 lg:mx-6">
	<img src={logo} alt="Logo" class="w-8 mr-2" />
	<div class="flex items-center flex-shrink-0 text-gray-600 mr-6">
		<span class="font-semibold text-xl tracking-tight">Faik Yesilyaprak</span>
	</div>
	<div class="block lg:hidden">
		<button
			class="flex items-center px-3 py-2 border text-gray-600 bg-gray-100 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md"
			on:click={toggleCollapse}
		>
			Menu
		</button>
	</div>
	{#if isCollapsed == false}
	<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
		<div class="text-sm lg:flex-grow">
			<a 
				href="/"
				class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-100 mr-4 duration-500 ease-in-out no-underline hover:no-underline hover:bg-gray-600 rounded-md p-2"
				aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			>
				Home
			</a>
			<a
				href="/projects"
				class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-100 mr-4 duration-500 ease-in-out no-underline hover:no-underline hover:bg-gray-600 rounded-md p-2"
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
			>
				Projects
			</a>
			<a
				href="/about"
				class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-100 mr-4 duration-500 ease-in-out no-underline hover:no-underline hover:bg-gray-600 rounded-md p-2"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				About Me
			</a>
		</div>
		<div class="flex">
			<a
				href="https://github.com/FaikYY"
				class="duration-500 ease-in-out no-underline inline-block text-smleading-none hover:no-underline mt-4 lg:mt-0 mr-4"
				target="_blank"
			>
				<img src={github} alt="Github" class="w-8" />
			</a>
			<a
				href="#"
				class="duration-500 ease-in-out no-underline inline-block text-sm px-4 py-2 leading-none border-2 rounded-md hover:text-gray-100 border-gray-600 hover:bg-gray-600 hover:border-transparent text-gray-600 hover:no-underline mt-4 lg:mt-0"
			>
				Light / Dark Mode
			</a>
		</div>
	</div>
	{/if}
</nav>