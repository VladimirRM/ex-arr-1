// sum all arr

const array = [1, 2, 3, 4, 5];
// let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

let sum = array.reduce((ac,cur) => ac + cur ) 

console.log(sum);