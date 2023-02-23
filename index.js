// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let user = [
  {
    name: "Ivan",
    age: 40,
  },
  {
    name: "Artem",
    age: 32,
  },
  {
    name: "Lesya",
    age: 23,
  },
];

user.sort((x1, x2) => x1.age - x2.age);

console.log(user);
