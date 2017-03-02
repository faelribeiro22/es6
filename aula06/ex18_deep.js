let pessoa = {
  nome: 'Ana',
  endereco: {rua: 'A', numero: 1000}
};

let {endereco: {rua, numero, cep = 5000} } = pessoa;
console.log(rua,numero,cep);

// erro
let {conta: {numero, agencia}} = pessoa;
console.log(numero,agencia);
