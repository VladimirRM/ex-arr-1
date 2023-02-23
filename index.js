// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let arr = [1, 2, 3, 4, 5, 6, 7];

let rev = arr.map((e, i, arr) => arr[arr.length - i - 1]);

console.log(rev);
