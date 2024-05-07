<script context="module">
	export function slugify(str) {
		return String(str)
			.normalize('NFKD') // split accented characters into their base characters and diacritical marks
			.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
			.trim() // trim leading or trailing whitespace
			.toLowerCase() // convert to lowercase
			.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
			.replace(/\s+/g, '-') // replace spaces with hyphens
			.replace(/-+/g, '-'); // remove consecutive hyphens
	}
</script>

<script>
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<Header />
<main class="flex flex-col">
	<slot />
</main>
<Footer />

<header class="layout-header">Header</header>
<footer class="layout-footer">Footer</footer>

<style>
	.layout-header {
		background-color: #264653;
		color: orange;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}

	.layout-footer {
		background-color: #264653;
		color: orange;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
