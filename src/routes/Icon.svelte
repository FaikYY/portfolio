<script>
	export let src = '';
	export let href = '#';
	export let alt = '';
</script>

<a {href} target="_blank">
	<img class="icon" {src} {alt} />
</a>

<style>
	img {
		width: clamp(1.5rem, 2vw, 2rem);
	}
</style>
