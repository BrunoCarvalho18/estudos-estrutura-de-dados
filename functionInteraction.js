let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function isEven(x){
  return x % 2 === 0 ? true : false;
}

console.log(numbers.every(isEven));  // ate que devolva false
console.log(numbers.some(isEven));  //  ate que devolva true
console.log(numbers.forEach(x => console.log(x % 2 === 0)));
const myMap = numbers.map(isEven);
const evenNumbers = numbers.filter(isEven);
const reduce = numbers.reduce((previous,current) => previous + current);
console.log(myMap);
console.log(evenNumbers);
console.log(reduce);

