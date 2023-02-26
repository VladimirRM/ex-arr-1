// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let user = [
  {
    name: "Ivan",
    age: 42,
  },
  {
    name: "Yana",
    age: 32,
  },
  {
    name: "Artem",
    age: 12,
  },
];
user.sort((x1, x2) => {
  return x1.name.localeCompare(x2.name);
});

console.log(user);
