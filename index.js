// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

let user = [
  {
    user: "ivan",
    age: 42,
  },
  {
    user: "Yana",
    age: 43,
  },
  {
    user: "Anna",
    age: 23,
  },
];

user.sort((x1, x2) => x1.age - x2.age);

console.log(user);
