const arr = new Array();
//Atribuindo elementos ao arr, os elementos Paulo Tijano e Seu Pimba
arr[0] = "Paulo tejano";
arr[1] = "Seu Pimba";

const arr2 = new Array(
  true,
  "Sou Uma String",
  28,
  new Array(2, "Pedro", false, 10)
);

const arr3 = [1, true, [2]];
// Inserindo um item ao array usando os metodos sengintes:
arr3[1] = "a";
arr3[2] = "b";
arr3.push("push"); // Inserindo o valores  com push

console.log(arr3);
console.log(arr2[3][1]);
console.log(arr2[3][arr2[3].length - 1]);
console.log(typeof arr3[3]);
