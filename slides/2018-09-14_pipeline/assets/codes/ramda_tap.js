const users = {
  a: { name: 'a', age: 10 },
  b: { name: 'b', age: 39 },
  c: { name: 'c', age: 18 },
  d: { name: 'd', age: 5 },
}

const { sort, ascend, prop, map, tap } = R
const sortByAge = sort(ascend(prop('age')));
const mapToName = map(prop('name'))

users
  |> Object.values
  |> sortByAge
  |> tap(console.log) // <- これ！
  |> mapToName
  |> alert
