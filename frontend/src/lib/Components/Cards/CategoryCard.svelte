<script>
	export let content; // passe les arguments au composant
	export let urlsrc; // url à passer

	import { page } from '$app/stores';

	const { name, image, shortdesc } = content.attributes;
	const { large, medium, small, thumbnail } = image.data.attributes.formats;

	// récupère la fonction de slugification
	import { slugify } from '../../../routes/+layout.svelte';
</script>

<a href="{$page.route.id}/{slugify(name)}" class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
	<div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
		<div class="bg-cover h-48 overflow-hidden">
			<img
				srcset="
					{urlsrc}{small.url} 300w,
					{urlsrc}{medium.url} 1024w,
					{urlsrc}{large.url} 1400w"
				sizes="(max-width: 340px) 300px,(max-width: 1260px) 1000px,1920px"
				src="{urlsrc}{thumbnail.url}"
				alt={name}
			/>
		</div>
		<div class="p-4 flex-1 flex flex-col">
			<h3 class="mb-4 text-2xl">{name}</h3>
			<div class="mb-4 text-grey-darker text-sm flex-1">
				<p>{shortdesc}</p>
			</div>
		</div>
	</div>
</a>
