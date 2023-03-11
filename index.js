// sum  for, reduce;
// average sum for;
// find number in array
// delete duplicate in array
// show number between range
// max  for, reduce, Math reduce-Math;
// create 20 random number
// calc square all number
// sort  number, item, localeCompare;
// reverse num, for, map;
// false arr for, filter

const arr = [7, 0, "hello", 5, false, NaN];

// let arr = [1, 2, -2, 2, 3, -4, 5, -5, 5, 5, 6, 7];

result = [];

for (let i = 0; i < arr.length; i++) {
  if (!!arr[i]) {
    result.push(arr[i]);
  }
}

console.log(result);

// for( let i = 0; i<arr.length; i++){}
