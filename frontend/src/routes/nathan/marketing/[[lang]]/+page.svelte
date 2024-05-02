<script>
    import { page } from '$app/stores';
    const greetings = {
        en: 'hello',
        de: 'hallo',
        fr: 'bonjour'
    };
    const { lang = 'fr'} = $page.params;
    const greeting = greetings [lang];
</script>

<h1>{greeting}</h1>