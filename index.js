// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

// let arr = [1, NaN, "Ivan", false, 31, "6", -7];

let user = [
  {
    name: "Ivan",
    age: 45,
  },
  {
    name: "Yan",
    age: 34,
  },
  {
    name: "Anna",
    age: 24,
  },
];

user.sort((x1, x2) => {
  return x1.name.localeCompare(x2.name);
});

console.log(user);
