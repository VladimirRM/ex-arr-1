// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let arr = [1, 2, 8, 3, 5, 6, ];

let max = arr[0]


for( let i =0; i <arr.length; i++){
    max = Math.max(arr[i], max)
}
console.log(max);
