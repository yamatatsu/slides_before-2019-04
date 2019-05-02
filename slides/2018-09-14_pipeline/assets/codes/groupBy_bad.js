const users = {
  a: { name: 'a', age: 5 },
  b: { name: 'b', age: 8 },
  c: { name: 'c', age: 10 },
  d: { name: 'd', age: 18 },
  e: { name: 'e', age: 21 },
  f: { name: 'f', age: 39 },
}

const groups = {}
for(let id in users) {
  const user = users[id]
  const generation = Math.floor(user.age / 10)
  if (!groups[generation]) groups[generation] = []
  groups[generation].push(user)
}

console.log(groups)
