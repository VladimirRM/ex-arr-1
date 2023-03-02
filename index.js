// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

const arr = [7, 0, "hello", 5, false, NaN];

let notFalsy = [];

arr.forEach((item,i,arr) => {
  if (!!arr[i]) {
    notFalsy.push(arr[i]);
  }
});

console.log(notFalsy);
