// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

let arr = [1, 2, 3, 4, 5, 6];

let max = arr.reduce((acc, item) => Math.max(acc, item));

console.log(max);
