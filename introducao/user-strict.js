/* "user strict"; // Serve para evitar erros de delcaração ex: let x = 10
y = 10;

console.log(x);

function foco() {
  "user strict"; // Serve para evitar erros de delcaração ex: let x = 10
  let x = 20;
}
foco();
console.log(y); */
// console.log(y);
function Teste() {
  "use strict";
  console.log(this);
  this.a = "a";
}
Teste();
