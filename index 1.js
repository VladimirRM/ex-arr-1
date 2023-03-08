///////////sum number ////////////////

// let arr = [1,2,3,4,5,6]

// let sum = 0

// for (let i = 0; i<arr.length; i++){
//       sum += arr[i]
// }
// console.log(sum);


// let sum = arr.reduce((acc,cur)=> acc + cur)

// console.log(sum);

/////////////////////// MAX NUMBER ///////////////

// let arr = [1,2,3,4,5,6]

// let max = arr[0]

// for (let i =0; i<arr.length; i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }
// }

// let max = arr[0]

// for  (let i=0; i<arr.length;i++){
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

//////////////false array///////


// const arr = [7, 0, "hello", 5, false, NaN];

// let notFalsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!!arr[i]) {
//     notFalsy.push(arr[i]);
//   }
// }

// console.log(notFalsy);



// const arr = [7, 0, "hello", 5, false, NaN];

// const notFalsy = arr.filter(Boolean)

// console.log(notFalsy);

/////////////////find average////////////

// let array = [1, 2, 3, 5, 6, 7, 8];

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// let result = sum / array.length;

// console.log(result);

/////////find number //////////////
// let array = [1, 2, 3, 5, 6, 7, 8, 9 ];

// let num = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 9) {
//     document.write('el done')
//     ;
//   }
// }


///////////////sum square num ////////////
// let arr = [1, 2, 3, 5, 6, 7, 8, 9];

// let num = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += arr[i] * arr[i];
// }

// console.log(sum);


//////// show number between condition ///////
// let arr = [1, 2, 3, 5, 6, 7, 8, 9];

// let num = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 9) {
//     console.log(arr[i]);
//   }
// }

// console.log(num);


////////////create 20 random number /////////

// let arr = []

// for( let i =0; i < 20; i++){
//     arr.push(Math.round(Math.random()* 20) +1)
// }

// console.log(arr);