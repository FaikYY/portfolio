<script>
	import linkedin from '$lib/images/linkedin.png';
	import github from '$lib/images/github.svg';
	import medium from '$lib/images/medium.svg';
	import email from '$lib/images/email.png';

	import ButtonDarkMode from './ButtonDarkMode.svelte';
	import Icon from './Icon.svelte';
</script>

<div id="icon__box" class=" flex items-center justify-center rounded-b-lg border-b-2 shadow-lg">
	<Icon href="https://faikyy.medium.com" src={medium} alt="Medium" />
	<Icon href="mailto:faikyesilyaprak@outlook.com" src={email} alt="Email Outlook" />
	<Icon href="https://github.com/FaikYY" src={github} alt="Github" />
	<Icon href="https://www.linkedin.com/in/faik-yesilyaprak/" src={linkedin} alt="LinkedIn" />
	<ButtonDarkMode />
</div>
