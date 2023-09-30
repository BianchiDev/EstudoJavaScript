n1 = 8;
n2 = 3;

console.log(n1 / n2);

console.log(n1 * n2);

console.log(n1 - n2);

console.log(n1 + n2);

console.log(n1 % n2);

// Operadores de atribuição

let n3 = 10;

let n4 = "100";
n3 **= 2; // a base de n3 é 10 pela atribuição anterior, porém ao receber a receber o operador **=  o valor após ele é o exponecial.
console.log(n3);
console.log(n3 == n4); // Estou comparando os valores de n3, após ser elevado ao quadrado e ter como resultado 100 como n4
//quando comarado os valores o resultado é true

console.log(n3 === n4); // Estou comparando os valores e o tipo de n3, após ser elevado ao quadrado e ter como resultado 100 como n4
//quando comarado os valores o resultado é false

/* 
Para uma pessoa viajar para o exterior :
Precisa ser mairo de idade  
OU 
Acompanhado dos pais 
E
Ter o bilheter
 */

let maiorDeIdade = 18;
let AcompadoDosPais = false;
let compraBilhete = true;

const podeViajar = (maiorDeIdade >= 18 || AcompadoDosPais) && compraBilhete;

console.log(`Pode viajar ${podeViajar}`);
