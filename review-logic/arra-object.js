/* const nome = ["Daniel", "iara", "pedro", "kayky"];

const pessoa = [{ nome: "lamare", idade: 12, email: "" }]; */

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

/* function testar() {
  if (pessoas.idade >= 5 && pessoas.idade < 18) {
    return "Essa pessoa é o pedro";
  }
  if (pessoas.idade >= 18 && pessoas.idade < 23) {
    return "Essa pessoa e o Bianchi";
  }
  if (pessoas.idade >= 23 && pessoas.idade < 50) {
    return "Essa pessoa é a irara";
  } else {
    return "Essa é a Juliana";
  }
}

const idade = 5; // Altere aqui a idade que você deseja testar
const resultado = testar();
console.log(resultado);
 */
