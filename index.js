let arr = [1, 2, 3, 4, 5, 6, 7];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  max = Math.max(arr[i], max);
}

console.log(max);
