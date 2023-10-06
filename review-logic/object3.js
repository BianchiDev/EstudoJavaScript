/* Inserindo uma função a uma entidade */

// ############### Forma classica ################

// const produto = {
// nome: "caneta",
// qtd: 10,

// comprar: function (test) {
// if (test > this.qtd) {
// return "Quantidade maior que a do estoque";
// }
// this.qtd -= test;
// },
// };
// produto.comprar(3);
// console.log(produto);

const produto = {
  nome: "caneta",
  qtd: 10,

  comprar: function (test) {
    if (test > this.qtd) {
      return "Quantidade maior que a do estoque";
    }
    this.qtd -= test;
  },
  teste1: function () {
    console.log(this);
  },
  test2: () => {
    console.log(this);
  },
};
//produto.comprar(3);
//console.log(produto);
produto.teste1();
produto.test2();
