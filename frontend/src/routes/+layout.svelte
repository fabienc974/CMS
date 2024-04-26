<script>
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
</script>

<Header />
<main class="flex flex-col">
	<slot />
</main>
