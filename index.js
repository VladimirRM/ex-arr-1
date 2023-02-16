let users = [
  {
    name:' Ivan',
    age: 35,
  },
  {
    name:' petro ',
    age: 38,
  },
  {
    name:' Ivan',
    age: 24,
  },
]

users.sort((x1,x2)=> x1.age-x2.age)

console.log(users);