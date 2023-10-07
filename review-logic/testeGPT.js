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

function testar(idade) {
  if (
    (idade >= 5 && idade < 18) ||
    pessoas.find((pessoa) => pessoa.nome === "Pedro")
  ) {
    return "Essa pessoa é o Pedro";
  } else if (
    (idade >= 18 && idade < 23) ||
    pessoas.find((pessoa) => pessoa.nome === "bianchi")
  ) {
    return "Essa pessoa é o Bianchi";
  } else if (
    (idade >= 23 && idade < 50) ||
    pessoas.find((pessoa) => pessoa.nome === "iara")
  ) {
    return "Essa pessoa é a Iara";
  } else {
    return "Essa é a Juliana";
  }
}

const idade = 18; // Altere aqui a idade que você deseja testar
const resultado = testar(idade);
console.log(resultado);
