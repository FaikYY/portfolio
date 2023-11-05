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
		width: 2rem;
	}

	@media (min-width: 640px) {
		img {
			width: 1.5rem;
		}
	}
</style>
