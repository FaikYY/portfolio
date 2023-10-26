<script>
	export let src = '';
	export let href = '#';
	export let alt = '';
</script>

<a
	{href}
	class="text-smleading-none inline-block no-underline duration-500 ease-in-out hover:no-underline"
	target="_blank"
>
	<img {src} {alt} class="icon mx-2" />
</a>

<style>
	img {
		width: clamp(2rem, 3vw, 2.5rem);
	}
</style>
