const marvel_heros = ["tronman","spiderman","batman"];
const dc_heros = ["shaktiman","nagraj","doga"];

marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Tushar kumar"));
console.log(Array.from("Tushar kumar"));