import { writable } from 'svelte/store';
let initialValue = "test pour voir";
const storeTest = writable(initialValue, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});

export default storeTest;
