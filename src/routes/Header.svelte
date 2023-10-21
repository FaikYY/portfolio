<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	
	import leaf from '$lib/images/leaf.png';
	import linkedin from '$lib/images/linkedin.png';
	import github from '$lib/images/github.svg';
	import medium from '$lib/images/medium.svg';
	import email from '$lib/images/email.png';
	
	import ButtonDarkMode from './ButtonDarkMode.svelte';
	import Icon from './Icon.svelte';

	$: isCollapsed = false;

	function toggleCollapse() {
		isCollapsed = !isCollapsed;
	}
</script>

<nav class="flex items-center justify-between flex-wrap p-8 lg:mx-10">
	<img src={leaf} alt="Logo" class="w-10" />
	<div class="flex items-center flex-shrink-0 mx-3">
		<span class="font-bold text-2xl sm:text-3xl">Faik Yesilyaprak</span>
	</div>
	<div class="block lg:hidden">
		<button
			class="flex items-center text-sm font-bold px-2 py-2 border duration-500 ease-in-out no-underline hover:no-underline rounded-md"
			on:click={toggleCollapse}
		>
			Menu
		</button>
	</div>
	{#if isCollapsed == false}
		<div transition:fade class="w-full block flex-grow lg:ml-6 lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<a
					href="/"
					class="text-lg block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				>
					Home
				</a>
				<a
					href="/projects"
					class="text-lg block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				>
					Projects
				</a>
				<a
					href="/about"
					class="text-lg block mt-4 lg:inline-block lg:mt-0 mr-4 duration-500 ease-in-out no-underline hover:no-underline rounded-md p-2"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				>
					About Me
				</a>
			</div>
			<div class="flex items-end lg:items-center">
				<Icon href="https://faikyy.medium.com" src={medium} alt="Medium"/>
				<Icon href="mailto:faikyesilyaprak@outlook.com" src={email} alt="Email Outlook"/>
				<Icon href="https://github.com/FaikYY" src={github} alt="Github" />
				<Icon href="https://www.linkedin.com/in/faik-yesilyaprak/" src={linkedin} alt="LinkedIn" />
				<ButtonDarkMode />
			</div>
		</div>
	{/if}
</nav>
