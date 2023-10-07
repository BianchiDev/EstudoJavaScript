function sum(n1, n2) {
  if (typeof n1 !== Number || typeof n2 !== Number) {
    throw Error("Sum aceita apenas números");
  }
  return n1 + n2;
}
sum("a");
