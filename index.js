// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// const arr = [7, 0, "hello", 5, false, NaN];

user = [
  {
    name: "Ivan",
    age: 40,
  },
  {
    name: "Yana",
    age: 15,
  },
  {
    name: "Alyosha",
    age: 12,
  },
];

user.sort((x1, x2) => {
  return x1.name.localeCompare(x2.name);
});

console.log(user);
