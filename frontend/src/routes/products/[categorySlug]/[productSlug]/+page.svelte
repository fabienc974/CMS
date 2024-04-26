<script>
  import { page } from "$app/stores";
  const productSlug = $page.params.productSlug;
</script>
<p class="text-sm">Dtéail du produit #{productSlug}</p>
{JSON.stringify($page)}