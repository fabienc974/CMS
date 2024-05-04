<script>
	import Hero from '$lib/Components/Hero.svelte';
	import Carrousel from '../lib/Components/Carrousel.svelte';

	export let data; // propre au framework
	
	const { carrousel } = data;	
	let carrouselBlocs = [];
	carrousel.forEach((element) => {
		let image = element.image.data[0].attributes.formats;		
		let item = { ...element, image };
		carrouselBlocs = [...carrouselBlocs, item];
	});

</script>

on est sur l'accueil

<!-- <Hero /> -->
<Carrousel datas={carrouselBlocs} />
