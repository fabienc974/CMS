import { json } from '@sveltejs/kit';

const jwt = `16ae55f1a059d2eaa748066c12bf0a62a2712eea8e456c7ff2c62230f8e13f304f5ea80ff3b1438d88299315133f222dfab3f5c266a102cfbad166f2c947742c04839d42f012a6813afce17cbedb0ef2add3d3dab227b5258cd2cb4dcc91c5919295b3469059b625eaded6814136d590b227814ea167c7aa40b5932cbe96abda`;

export async function GET() {
	try {
		// return new Response('hello gros');
		let datas = await fetch('http://localhost:1337/api/carrousels').then((res) => res.json());
		// console.log(datas);
		// return json(datas);
		// return new Response(JSON.stringify(datas), {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${jwt}`
		// 	}
		// });
		return json(datas, { Authorization: `Bearer ${jwt}` });
	} catch (error) {
		return new Response(JSON.stringify(error));
	}
}
