<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	console.log($page);
	import CategoryCard from '$lib/Components/Cards/CategoryCard.svelte';
	// on récupère toutes les données de nos catégories de produits
	export let data;
	const { categories } = data;

	// on récupère uniquement les catégories qui sont en level 0 et qui ont un statut active = true et qui dispose d'une description
	let topCategories = categories.data.filter(
		(el) =>
			el.attributes.parent.data.length == 0 &&
			el.attributes.active &&
			el.attributes.shortdesc != null
	);

	// modifie les urls de chaque élément afin d'avoir accès à son url
	topCategories = topCategories.forEach((el) => {
		el.attributes.slug = `${$page.route.id}/${el.attributes.name}`
	});

	console.log({ categories, topCategories });
</script>

<div class="flex flex-wrap m-3">
	{#each topCategories as element}
		<CategoryCard content={element} />
	{/each}
</div>

<div class="bg-gray-100">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
			<h2 class="text-2xl font-bold text-gray-900">Collections</h2>

			<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
				<div class="group relative">
					<div
						class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
							alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<h3 class="mt-6 text-sm text-gray-500">
						<a href="/products/creme-fraiche/pizza-une">
							<span class="absolute inset-0"></span>
							Desk and Office
						</a>
					</h3>
					<p class="text-base font-semibold text-gray-900">Work from home accessories</p>
				</div>
				<div class="group relative">
					<div
						class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
							alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<h3 class="mt-6 text-sm text-gray-500">
						<a href="/products/creme-fraiche/pizza-deux">
							<span class="absolute inset-0"></span>
							Self-Improvement
						</a>
					</h3>
					<p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
				</div>
				<div class="group relative">
					<div
						class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
							alt="Collection of four insulated travel bottles on wooden shelf."
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<h3 class="mt-6 text-sm text-gray-500">
						<a href="/products/creme-fraiche/pizza-trois">
							<span class="absolute inset-0"></span>
							Travel
						</a>
					</h3>
					<p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
				</div>
			</div>
		</div>
	</div>
</div>
