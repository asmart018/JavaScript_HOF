console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
  return function (plusNumber) {
    return num + plusNumber;
  };
}

const plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach(function (user) {
  console.log(user.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let mapUsers = users.map(function (user) {
  return { name: user.name, score: user.score };
});

console.log(mapUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let activeUsers = users.filter(function (user) {
  return user.isActive;
});

console.log(activeUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let sortUsers = users.sort((user1, user2) => user2.score - user1.score);

console.log(sortUsers);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let avg = users.reduce((sum, user) => sum + user.score, 0) / users.length;

console.log(avg);
