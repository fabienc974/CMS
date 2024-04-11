<script>
	let quantity = 0;
	function addTocart() {
		inventory = [...inventory, quantity];
		quantity = ++quantity;
	}
	function removeFromcart() {
		if (quantity != 0) {
			quantity = --quantity;
			inventory = inventory.slice(0,-1)
		}
	}
	let inventory = [1, 2, 3];
	console.log(inventory);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Your pizza cart has {quantity} items. UwU baka</h1>
<button on:click={addTocart}> Add To Cart </button>
<button on:click={removeFromcart}> Remove From Cart </button>
<h2>{inventory}</h2>
