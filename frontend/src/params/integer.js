/* 
on doit uniquement matcher des entiers dans les paramètres d'url.
permet de contrôler les url d'un site pour éviter les pages en 404
 */

export function match(param) { // la fonction doit être "match" absolument car il s'agit d'une convention Sveltekit
	return /^\d+$/gim.test(param);
}
