// sum  for, reduce;
// average sum for;
// find number in array
// show number between condition
// max  for, reduce, Math reduce-Math;
// create 20 random number
// calc square all number
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter
// const arr = [7, 0, "hello", 5, false, NaN];

let arr = [1, 2, 3, 4, 5, 6, 7];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
