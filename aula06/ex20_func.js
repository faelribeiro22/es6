function rand({min = 0, max = 1000}) {
  var value = Math.random() * (max - min);
  return Math.floor(value) + min;

}
console.log(rand({max:50, min: 40}));
console.log(rand({min: 955}));
console.log(rand({}));
// erro
console.log(rand());
