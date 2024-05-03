<script>
	// Default theme
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let datas;
</script>

<Splide aria-label="My Favorite Images">
	{#each datas as item}
		<!-- {JSON.stringify(item)} -->

		<SplideSlide>
			<img
				srcset="http://localhost:1337{item.image.small.url} 300w,
      http://localhost:1337{item.image.medium.url} 1024w,
      http://localhost:1337{item.image.large.url} 1400w"
				sizes="(max-width: 340px) 300px,
    (max-width: 1260px) 1000px,
    1920px"
				src="http://localhost:1337{item.image.thumbnail.url}"
				alt={item.name}
			/>
		</SplideSlide>
	{/each}
</Splide>
