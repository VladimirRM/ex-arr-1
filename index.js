// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let arr = [1, 2, 8, 3, 5, 6, 9];

let max = arr.reduce((acc, next) => Math.max(acc, next));

console.log(max);
