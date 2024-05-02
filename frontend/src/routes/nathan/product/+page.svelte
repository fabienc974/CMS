 <script>
    export let productID = 100;
 </script>
 
 <a href="/">Home</a>
 <h1>product list</h1>

<h2><a href="/nathan/product/1"> product 1</a> </h2>
<h2><a href="/nathan/product/2"> product 2</a> </h2>
<h2><a href="/nathan/product/3"> product 3</a> </h2>
<h2><a href={`/nathan/product/${productID}`}> product {productID}</a> </h2>
