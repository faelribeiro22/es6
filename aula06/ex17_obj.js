let pessoa = {nome: 'Ana', idade: 20};

var {nome, idade} = pessoa;
console.log(nome, idade);

let {nome: n, idade: i} = pessoa;
console.log(n,i);

let {genero, situacao = 'Ativa'} = pessoa;
console.log(genero,situacao);
