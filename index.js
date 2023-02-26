// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

const arr = [7, 0, "hello", 5, false, NaN];

const notFalsy = [];

for (let i = 0; i < arr.length; i++) {
  if (!!arr[i]) {
    notFalsy.push(arr[i]);
  }
}

console.log(notFalsy);
