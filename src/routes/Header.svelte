<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	
	import logo from '$lib/images/svelte-logo.svg';
	import linkedin from '$lib/images/linkedin.png';
	import github from '$lib/images/github.svg';
	
	import ButtonDarkMode from './ButtonDarkMode.svelte';
	import Icon from './Icon.svelte';

	$: isCollapsed = false;
	let screenSize = 0;

	function toggleCollapse() {
		isCollapsed = !isCollapsed;
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<nav class="flex items-center justify-between flex-wrap p-6 lg:mx-6">
	<img src={logo} alt="Logo" class="w-8 mr-2" />
	<div class="flex items-center flex-shrink-0 mr-6">
		<span class="font-semibold text-xl tracking-tight">Faik Yesilyaprak</span>
	</div>
	<div class="block lg:hidden">
		<button
			class="flex items-center px-3 py-2 border mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md"
			on:click={toggleCollapse}
		>
			Menu
		</button>
	</div>
	{#if isCollapsed == false}
		<div transition:fade class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<a
					href="/"
					class="block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				>
					Home
				</a>
				<a
					href="/projects"
					class="block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				>
					Projects
				</a>
				<a
					href="/about"
					class="block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				>
					About Me
				</a>
			</div>
			<div class="flex">
				<Icon href="https://github.com/FaikYY" src={github} alt="Github" />
				<Icon href="https://www.linkedin.com/in/faik-yesilyaprak/" src={linkedin} alt="LinkedIn" />
				<ButtonDarkMode />
			</div>
		</div>
	{/if}
</nav>
