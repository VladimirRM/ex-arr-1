// sum  for reduce
// max  for reduce Math
// sort  number item

let arr = [1, 2, 3, 4, 5];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  sum = Math.max(arr[i], max);
}

console.log(sum);
