import { STRAPIURL } from '$env/static/private';
export async function load({ fetch, params }) {
	// récupère toutes les catégories de produits
	const urlCategoriesStrapi = `/api/categories?populate=image,parent,shortdesc`;
	const catQuery = fetch(`${STRAPIURL}${urlCategoriesStrapi}`).then((res) => res.json());
	const [categories] = await Promise.all([catQuery]);

	return { urlsrc: STRAPIURL, categories };
}
