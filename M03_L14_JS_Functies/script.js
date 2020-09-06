//Deel A Functie

/* toMakeSandwichCheese () {
  A slice of bread;
  Add cheese;
  A slice of bread;
} */

function toMakeSandwichCheese() { // Old
  recipe = ['A slice of bread',
    'Add cheese',
    'A slice of bread'];
}

console.log(['A slice of bread',
  'Add cheese',
  'A slice of bread']);

toMakeSandwichCheese();

//Test= goed...deze is de bedoeling!
function makeSandwich() {
  'A slice of bread';
  'Add cheese';
  'A slice of bread';
}
console.log(['A slice of bread',
  'Add cheese',
  'A slice of bread']);

toMakeSandwichCheese();


//Deel B Functie met argument

function makeSandwich() { //This is a function declaration= function statement.
  'A slice of bread';
  'Add topping';
  'A slice of bread';
  //return turkey
}
//makeSandwich('ham');
console.log('There you go, a sandwich with' + ' ' + 'ham.'); // call
console.log('There you go, a sandwich with' + ' ' + 'turkey.'); // call

// Deel C Gbruik een return statement

const calculateDiscountedPrice = function (totalAmount, discount) {
  return totalAmount - discount;
};
console.log(Math.round(calculateDiscountedPrice(29.8, 5)));
// Zie hierboven Hoe voeg je Math.round toe?


//Wanneer je 1 expression returned, kan je curly braces weghalen en de return.
//const functionExpression = () => "i'm a function expression";

//Deel D
/*
in: totaal bedrag, kortingsbedrag
uit: totaalbedrag - korting
Als totaal bedrag hoger of gelijk is aan 25 euro, dan krijg je een korting van 5 euro. 
als het bedrag lager is dan 25 euro krijg je geen korting
*/

const calculateDiscountedPriceSpecified = (totalAmount, discount) => {
  if (totalAmount >= 25) {
    console.log("Discount geldig voor bedrag " + totalAmount);// dan weet je waar je code resultaat komt!
    return totalAmount - discount;

  } else if (totalAmount < 25) {
    console.log("GEEN Discount voor bedrag " + totalAmount);
    return totalAmount;
  }
};
console.log(Math.round(calculateDiscountedPriceSpecified(25, 5)));

console.log(Math.round(calculateDiscountedPriceSpecified(23.99)));




