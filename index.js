// 1 sum  for, reduce;
// 2 average sum for;
// 3 find number in array
// 4 delete duplicate in array
// 5 show number between range
// 6 max  for, reduce, Math reduce-Math;
// 7 create 20 random number
// 8 calc square all number
// 9 sort  number, item, localeCompare;
// 10 reverse num, for, map;
// 11 false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

// let arr = [1, 2, -2, 2, 3, -4, 5, -5, 5, 5, 6, 7];

let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if ((sum += arr[i])) {
    sum = arr[i];
  }
}

console.log(sum);

// for( let i = 0; i<arr.length; i++){}
