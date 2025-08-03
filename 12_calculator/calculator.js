const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((acum, curentV) =>acum + curentV, 0 );
};

const multiply = function(array) {
  return array.reduce((acum, curentV) =>acum * curentV, 1 );
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let contor = 1;
	for(let i = 1; i <= a; i++)
    contor *=i;
  return contor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
