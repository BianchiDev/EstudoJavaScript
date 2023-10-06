const pessoa = {
  nome: "maria",
  idade: 22,
  email: "ifpebianchi@gmail.com",
};

// console.log(pessoa);
// for (let prop in pessoa) {
//   console.log(prop);
//   console.log(pessoa[prop]);
// }

for (let prop in pessoa) {
  console.log(prop + ": " + pessoa[prop]);
}
