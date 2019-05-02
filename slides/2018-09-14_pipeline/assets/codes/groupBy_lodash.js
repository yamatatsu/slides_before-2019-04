const users = {
  a: { name: 'a', age: 5 },
  b: { name: 'b', age: 8 },
  c: { name: 'c', age: 10 },
  d: { name: 'd', age: 18 },
  e: { name: 'e', age: 21 },
  f: { name: 'f', age: 39 },
}

const groupBy = require('lodash/groupBy')

const groups = groupBy(users, user => Math.floor(user.age / 10))

console.log(groups)
