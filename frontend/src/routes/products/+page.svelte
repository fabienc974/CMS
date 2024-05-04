<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	// on récupère toutes les données de nos catégories de produits
	export let data;
	const { categories } = data;
	console.log(categories);
</script>

<!-- 
  //1. Afficher les données qui sont remontées de l'api dans la page HTML afin de s'assurer que tout est disponible. 
  indice : utiliser l'objet categories dans la fonction JSON.stringify(categories)

  //2. créer une boucle afin d'appeler le composant CategoryCard.svelteHTML
  indice : 
  - importer le composant dans la partie script
  - pour créer une boucle il faut utiliser : {#each items as item}   ---- ici ton contenu ---- {/each}
  -- passer categories dans les paramètres de la boucle puis passer item dans les données de composants CategoryCard
  --- indice : dans le composant CategoryCard, la variable qui recueille les données s'appelle datas (tu peux la changer si tu veux une nom de variable différent) 

  // 3. une fois dans le composant CategoryCard, tu devras afficher les différents éléments (descriptifs, nom, image etc.Page.Page.) de ta catégorie.
-->


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
