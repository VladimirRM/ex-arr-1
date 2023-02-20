// sum  for, reduce;
// max  for, reduce, Math reduce-Math;
// sort  number, item, localeCompare;
// reverse for, map;
// false arr for, filter

let users = [
  {
    name: "Angel",
    age: 23,
  },
  {
    name: "Peter",
    age: 35,
  },
  {
    name: "Boris",
    age: 18,
  },
];

users.sort((x1, x2) => x1.age - x2.age);

console.log(users);
