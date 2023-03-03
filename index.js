// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

let user = [
  {
    name: "Ivan",
    age: 23,
  },
  {
    name: "Yana",
    age: 222,
  },
  {
    name: "NINA",
    age: 21,
  },
];

user.sort((x1, x2) => {
  return x1.name.localeCompare(x2.name);
});

console.log(user);
