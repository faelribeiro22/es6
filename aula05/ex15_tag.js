function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return 'Outro valor';
}




let aluno = 'Gui';
let status = 'Aprovado';
console.log(tag `${aluno} está ${status}`);
