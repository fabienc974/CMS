<script>
	import { page } from '$app/stores';
	const { slug } = $page.params;
	const el = slug.split('/');
</script>

<p>doc HP</p>
<p>{JSON.stringify(el)}</p>
