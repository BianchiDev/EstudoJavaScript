// ##################### Conversão de tipos #########################

let n1 = 10; 
let n2 = "2";
let n3 = 2;
let n4 ="10";

let n5 = "2";
n5 = parseInt(n5);// ParseInt transforma uma Instring em um number 


let n6 = "10.89798797989"
n6 = parseFloat(n6);

console.log(n6, typeof n6); // parseFloat converte uma string em um (number do tipo float)

console.log(n1 * n2, typeof n1,  typeof n2);

console.log(n1 / n2, typeof n1,  typeof n2);

console.log(n1 - n2, typeof n1,  typeof n2);

console.log(n1 + n2, typeof n1,  typeof n2);  // Como os tipos são diferentes, n1 é um number e n2 é uma string ele vái concatenar


console.log(n1 + n3, typeof n1,  typeof n3); // tipos iguais,quanoo number,  soma.

console.log(n2 + n4, typeof n2,  typeof n4);// tipo iguas, quando string, concatena


console.log(n1 * n5, typeof n1,  typeof n5); // A ·String foi convertida em (number do tipo inteiro) e por isso ouve uma soma ao inves de uma concatenação. 


n8 = 11;

n8 = n8.toString();// toString converte um número em String.

console.log(n8 , typeof n8);