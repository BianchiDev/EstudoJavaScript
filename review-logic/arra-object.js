/* const nome = ["Daniel", "iara", "pedro", "kayky"];

const pessoa = [{ nome: "lamare", idade: 12, email: "" }]; */

//  Construa um loop que percorra todo o objeto e em seguida mostre o nome e dia a idade de cada um.

const pessoas = [
  {
    nome: "bianchi",
    idade: 18,
  },
  {
    nome: "iara",
    idade: 23,
  },
  {
    nome: "Pedro",
    idade: 5,
  },
  {
    nome: "julia",
    idade: 50,
  },
];

for (let i = 0; i < pessoas.length; i++) {
  console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`);
}
