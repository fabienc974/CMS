<script>	
	export let content; // passe les arguments au composant  
	console.log(content);
	const { name, image, shortdesc } = content.attributes;
</script>

<div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
	<div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
		<div
			class="bg-cover h-48"
			style="background-image: url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900);"
		></div>
		<div
			class="p-4 flex-1 flex flex-col"
			style="
"
		>
			<h3 class="mb-4 text-2xl">{name}</h3>
			<div class="mb-4 text-grey-darker text-sm flex-1">
				<p>{shortdesc}</p>
			</div>
			<a
				href="/{name}"
				class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
				style="
">Accéder à la catégorie</a
			>
		</div>
	</div>
</div>
