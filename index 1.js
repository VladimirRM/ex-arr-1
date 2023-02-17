///////////sum number ////////////////

// let arr = [1,2,3,4,5,6]

// let sum = 0

// for (let i = 0; i<arr.length; i++){
//       sum += arr[i]
// }
// console.log(sum);
// let sum = arr.reduce((acc,cur)=> acc + cur)

// console.log(sum);

////////// max number ///////////////

// let arr = [1,2,3,4,5,6]

// let max = arr[0]

// for (let i =0; i<arr.length; i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }
// }

// let max = arr[0]

// for  (let i=1; i<arr.length;i++){
//       max = Math.max(arr[i],max)
//    }

// console.log(max);



// let max = arr.reduce((acc, next) => Math.max(acc, next));


//     console.log(max)
// }


/////////////// sort element //////////////////

// let arr = [1, 4, 4, 3, 9, 5, 8];

// arr.sort((x1, x2) => {
//   if (x1 < x2) {
//     return -1;
//   }
//   if (x1 === x2) {
//     return 0;
//   }
//   if (x1 > x2) {
//     return +1;
//   }
// });
// console.log(arr);

//////////   sort number  /////////////


// let arr = [1, 4, 4, 3, 9, 5, 8];

// arr.sort((x1,x2)=>x1 - x2)

// console.log(arr);


///////// sort item/////////

// user = [
//     {name:'ana',
//       age:32
//     },
//     {name:'ivan',
//       age:33
//     },
//     {name:'petro',
//       age:34
//     },
//     {name:'kuzya',
//       age:60
//     },
// ]


// user.sort((u1,u2)=>u1.age - u2.age)

// console.log(user);


// users.sort((x1, x2) => {
//     return x1.name.localeCompare(x2.name);
//   });
  
//   console.log(users);


////////reverse/////////


// let arr = [1,2,3,4,5,]

// let reversed = []


// for(let i=arr.length - 1;i>=0;i--){
//     reversed.push(arr[i])
// }

// console.log(reversed);

// let arr = [1,2,3,4,5,]

// let reversed = arr.map((e,index,arr)=>arr[arr.length -index - 1])

// console.log(re);