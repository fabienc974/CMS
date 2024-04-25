<script>
	import { page } from '$app/stores';
	// const reviewId = $page.params.reviewSlug;
	// const productSlug = $page.params.productSlug;
	// const categorySlug = $page.params.categorySlug;
	const { productSlug, categorySlug, reviewId } = $page.params;
</script>

<p>Voir le review {reviewId} du produit {productSlug} de la catégorie {categorySlug}</p>
