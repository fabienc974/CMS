<script>
	import { page } from '$app/stores';

	const greetings = {
		en: 'Hello !',
		fr: 'Bonjour !',
		es: 'Hola !'
	};

	const { i18n = 'fr' } = $page.params;
	const greeting = greetings[i18n];
</script>

<p>{greeting}</p>
