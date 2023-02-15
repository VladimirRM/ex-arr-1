user = [
    {name:'ana',
      age:32
    },
    {name:'ivan',
      age:33
    },
    {name:'petro',
      age:34
    },
    {name:'kuzya',
      age:60
    },
]


user.sort((u1,u2)=>u1.age - u2.age)

console.log(user);