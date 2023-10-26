<script>
	import linkedin from '$lib/images/linkedin.png';
	import github from '$lib/images/github.svg';
	import medium from '$lib/images/medium.svg';
	import email from '$lib/images/email.png';

	import ButtonDarkMode from './ButtonDarkMode.svelte';
	import Icon from './Icon.svelte';
	import '../styles.css';
</script>

<div id="icon__box" class=" flex items-center justify-center gap-6 py-1">
	<Icon href="https://faikyy.medium.com" src={medium} alt="Medium" />
	<Icon href="mailto:faikyesilyaprak@outlook.com" src={email} alt="Email Outlook" />
	<Icon href="https://github.com/FaikYY" src={github} alt="Github" />
	<Icon href="https://www.linkedin.com/in/faik-yesilyaprak/" src={linkedin} alt="LinkedIn" />
	<ButtonDarkMode />
</div>

<style>
	@import '../styles.css';
	#icon__box {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-area: iconbox;
		position: fixed;
		bottom: 0;
		width: 100%;
		box-shadow: 0 -2px 6px rgba(29, 48, 64, 0.1);
		background-color: var(--color-background);
	}

	@media (640px <= width <= 840px) {
		#icon__box {
			z-index: 2;
			top: 0;
			right: 0;
			height: 100%;
			width: 7.5vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 6em;
			box-shadow: 0 10px 10px rgba(29, 48, 64, 0.1);
		}
	}
</style>
