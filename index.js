let arr = [2, 3, 4, 5, 6, 8];

let maxAll = arr[0];

for (let i = 0; i < arr.length; i++) {
  maxAll = Math.max(arr[i],maxAll);
}

console.log(maxAll);
