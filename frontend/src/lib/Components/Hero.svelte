<script>
	export let heroImage; // élément accessible en dehors du composant, directement dans le parent

	// gestion du carrousel
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let imageList = [];
	const jwt = `16ae55f1a059d2eaa748066c12bf0a62a2712eea8e456c7ff2c62230f8e13f304f5ea80ff3b1438d88299315133f222dfab3f5c266a102cfbad166f2c947742c04839d42f012a6813afce17cbedb0ef2add3d3dab227b5258cd2cb4dcc91c5919295b3469059b625eaded6814136d590b227814ea167c7aa40b5932cbe96abda`;

	onMount(async () => {
		imageList = await fetchCarrousel();
	});

	const fetchCarrousel = async () => {
		let datas;
		try {
			datas = await fetch('http://localhost:1337/api/carrousels?populate=*', {
				Authorization: `Bearer ${jwt}`
			}).then((res) => res.json());
			console.log(datas);
		} catch (error) {
			return json(error);
		}
    console.log("::", datas)
		return await datas;
	};
</script>

<div class="w-full h-100 flex">
	<img src={heroImage} alt={heroImage} />
	{#await imageList}
		waiting for datas...
	{:then elem}
		{#if elem.data != undefined}
			{JSON.stringify(elem.data)}
			{#each elem.data as item}
				image "{item.attributes.title}"
			{/each}
		{/if}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	
</div>
