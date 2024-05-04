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
		font-size:30px;
		text-align: center;
		padding: 10px;
	}

	.layout-footer{
		background-color: #264653;
		color: orange;
		font-size:30px;
		text-align: center;
		padding: 10px;
	}
</style>
