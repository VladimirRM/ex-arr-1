// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// let arr = [1, NaN, "Ivan", false, 31, "6", -7];

let arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
