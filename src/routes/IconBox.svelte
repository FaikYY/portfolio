<script>
	import linkedin from '$lib/images/linkedin.png';
	import github from '$lib/images/github.svg';
	import medium from '$lib/images/medium.svg';
	import email from '$lib/images/email.png';

	import DarkModeSwitch from './DarkModeSwitch.svelte';
	import Icon from './Icon.svelte';
	import '../app.css';
</script>

<div id="icon__box" class=" flex items-center justify-center gap-6 py-1">
	<Icon href="https://faikyy.medium.com" src={medium} alt="Medium" />
	<Icon href="mailto:faikyesilyaprak@outlook.com" src={email} alt="Email Outlook" />
	<Icon href="https://github.com/FaikYY" src={github} alt="Github" />
	<Icon href="https://www.linkedin.com/in/faik-yesilyaprak/" src={linkedin} alt="LinkedIn" />
	<DarkModeSwitch />
</div>

<style>
	@import '../app.css';
	#icon__box {
		display: flex;
		align-items: center;
		justify-content: space-around;
		grid-area: iconbox;
		position: fixed;
		bottom: 1rem;
		left: 50%;
		width: 75%;
		transform: translate(-50%, -50%);
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 3px rgba(29, 48, 64, 0.05);
		background-color: var(--color-background);
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	@media (min-width: 640px) {
		#icon__box {
			width: 50%;
		}
	}

	@media (min-width: 1000px) {
		#icon__box {
			width: 40%;
		}
	}

	@media (min-width: 1360px) {
		#icon__box {
			width: 25%;
		}
	}
</style>
