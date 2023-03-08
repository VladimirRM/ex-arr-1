// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

let user = [
  {
    name: "Ivan",
    age: 12,
  },
  {
    name: "Yana",
    age: 22,
  },
  {
    name: "Anna",
    age: 32,
  },
];

user.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log(user);
