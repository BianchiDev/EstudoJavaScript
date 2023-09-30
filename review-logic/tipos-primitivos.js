/* ########## Tipos de dados primitivos ###############
 String, number(Int, floats), booleano
 undfined, null, symbol(ES20215)
  */

let MinhaString;
MinhaString = "Minha string";
let MinhaString2 = 'Minha "string com aspas duplas"'; // Usa-se aspas simples para inserir aspas duplas no  resto é normal.

console.log(MinhaString2);

let MinhaString3 = "MinhaString tem apas 'dupla interna' Preste atenção"; // Usa-se aspas simples dentro de aspas duplas.

console.log(MinhaString3);

let resultado = 10;

// let MinhaString4 = "Minha estring contatenada com "  +resultado + " terá como resutado: "+ resultado;  Uma forma de concatenação tradicional.

// console.log(MinhaString4);

let MinhaString5 = `MinhaString recebe ${resultado} concatenado`; // TemplayString serve para concatenar entre sinal de crase.

console.log(MinhaString5);

console.log(
  typeof resultado,
  typeof minhaString,
  typeof MinhaString3,
  typeof minhaString5
);

const n1 = 10;
const n2 = 20;

console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`);
console.log(`O tipo de n12é ${typeof n2} e o seu valor é ${n2}`);

const isFalse = true;

console.log(`isFslse é :  ${isFalse}`);
