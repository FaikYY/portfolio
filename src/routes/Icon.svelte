<script>
     export let src = "";
     export let href = "#";
     export let alt = ""
</script>

<a
	{href}
	class="mt-4 ml-2 lg:mt-0 mr-4 duration-500 ease-in-out no-underline inline-block text-smleading-none hover:no-underline"
	target="_blank"
>
	<img {src} {alt} class="w-8" />
</a>
