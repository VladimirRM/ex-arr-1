// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

let user = [
  {
    name: "ivan",
    age: 21,
  },
  {
    name: "Yana",
    age: 22,
  },
  {
    name: "Anna",
    age: 11,
  },
];

user.sort((a, b) => a.age - b.age);

console.log(user);
