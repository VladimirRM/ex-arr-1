// sum  for, reduce;
// average sum for;
// find number in array
// show number between condition
// max  for, reduce, Math reduce-Math;
// create 20 random number
// calc square all number
// sort  number, item, localeCompare;
// reverse num, for, map;
// false arr for, filter

const arr = [7, 0, "hello", 5, false, NaN];

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (!!arr[i]) {
    result.push(arr[i]);
  }
}
console.log(result);
