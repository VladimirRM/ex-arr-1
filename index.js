// sum  for reduce
// max  for reduce Math reduce-Math
// sort  number item

let users = [
  {
    name: "Ivan",
    age: 13,
  },
  {
    name: "aveta",
    age: 48,
  },
  {
    name: "Calina",
    age: 33,
  },
];

users.sort((x1, x2) => {
  return x1.name.localeCompare(x2.name);
});

console.log(users);
