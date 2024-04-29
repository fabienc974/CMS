<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handleClick = () => {
		console.log('placing an order');
		goto('/test');
	};
	beforeNavigate((e) => console.log('before called',e));
	afterNavigate((e) => console.log('after called',e));
</script>

<p class="text-sm">Ici on liste toutes les catégories de produits qu'on a</p>
<ul class="w-full text-indigo-400">
	<li>Pizza sauce tomate</li>
	<li>Pizza crème frâiche</li>
	<li>etc...</li>
</ul>
<div class="w-full">
	<button
		on:click={handleClick}
		class="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"
		>Place order</button
	>
</div>
