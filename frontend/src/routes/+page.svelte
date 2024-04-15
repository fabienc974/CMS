<script>
	let quantity = 0;
	function addTocart() {
		if (remaining > 0) {
			inventory = [...inventory, quantity];
			quantity = ++quantity;
		} else {
			console.log('pas autorisé');
		}
	}
	function removeFromcart() {
		if (quantity != 0) {
			quantity = --quantity;
			inventory = inventory.slice(0, -1);
		}
	}
	let inventory = [1, 2, 3];
	console.log(inventory);
	let user = { name: 'nathan', description: [{ id: 0 }, { id: 1 }] };
	$: remaining = 10 - quantity;
	let price = 5;
	$: totalCost = quantity * price;
	function increasePrice() {
		price = price + 2;
	}
	$: console.log(`the Quantity is ${quantity}`);

	function handleClick(e) {
		console.log(e);
	}
	let searchedValue = '';

	let checked = false;
	$: console.log(checked);
	let product = {
		name: 't-shirt',
		quantity: 0
	};
	function increment() {
		product.quantity += 1;
	}
	let products = [
		{ name: 't-shirt', quantity: 10 },
		{ name: 'mug', quantity: 43 },
		{ name: 'pizza', quantité: 40 },
		{ name: 'glace', quantité: 10045 }
	];
	function addProduct() {
		let cup = { name: 'cup', quantity: 4 };
		products = [cup, ...products];
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Your pizza cart has {quantity} items. UwU baka</h1>
<button on:click={addTocart}> Add To Cart </button>
<button on:click={removeFromcart}> Remove From Cart </button>
<h2>{inventory}</h2>
<h3>{user.name}</h3>
<p>{user.description[1]['id']}</p>
<div>Remaining Inventory: {remaining}</div>
<div>Item Price: {price}</div>
<button on:click={increasePrice}> Increase price </button>
<div>Total Cost: {totalCost}</div>
<button
	on:click={() => {
		alert('Click has been handled!');
	}}
>
	Click Me!
</button>
<div
	on:mousemove={() => {
		handleClick(event);
	}}
	style="background: LawnGreen; padding: 20px;"
>
	You can click the green.
	<div style="background: OrangeRed; pading: 20px;">tu ne peux pas cliquer le rouge</div>
</div>

<h3>
	Searched: {searchedValue}
</h3>

<!-- <input on:keyup={setSearchedValue} type="text" id="myText" /> -->
<input bind:value={searchedValue} type="text" id="myText" />
<h3>
	Checked: {checked}
</h3>
<input type="checkbox" bind:checked />

{#if product.quantity >= 1}
	<div style="background: LightGreen; padding: 4px;">Ce produit est en stock</div>
{:else if product.quantity === 0}
	<div style="background: LightCoral; padding 4px;">Cet objet n'est plus en stock</div>
{:else}
	<div style="background: LemonChiffon; padding: 4px">Seulement quelques objets restants :4</div>
{/if}
<h1>Current {product.name} Quantity: {product.quantity}</h1>
<button on:click={increment}>Increment</button>
{#each products as product, i (product.name)}
	<h3>{product.name}</h3>
	<div>{i}</div>
{/each}
<button on:click={addProduct}> Add Product </button>

<style lang="scss">
	div {
		div {
			font-size: large;
		}
	}
</style>
