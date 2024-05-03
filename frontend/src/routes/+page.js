export async function load({ fetch, params }) {
	const carrouselUrl = 'http://localhost:1337/api/carrousels?populate=*';
	const jwt = `16ae55f1a059d2eaa748066c12bf0a62a2712eea8e456c7ff2c62230f8e13f304f5ea80ff3b1438d88299315133f222dfab3f5c266a102cfbad166f2c947742c04839d42f012a6813afce17cbedb0ef2add3d3dab227b5258cd2cb4dcc91c5919295b3469059b625eaded6814136d590b227814ea167c7aa40b5932cbe96abda`;

	const options = {
		Authorization: `Bearer ${jwt}`
	};
	const res = await fetch(carrouselUrl, options);
	const item = await res.json();
	const { data } = item;
	return { carrousel: data.map((el) => el.attributes) };
}
