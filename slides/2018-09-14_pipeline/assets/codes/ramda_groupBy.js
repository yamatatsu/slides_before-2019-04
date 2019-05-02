const users = {
  a: { name: 'a', age: 10 },
  b: { name: 'b', age: 39 },
  c: { name: 'c', age: 18 },
  d: { name: 'd', age: 5 },
  e: { name: 'e', age: 8 },
}

const { groupBy, pipe, prop, divide, __ } = R
const getGeneration = pipe(
  prop('age'),
  divide(__, 10),
  Math.floor,
)
const groupByGeneration = groupBy(getGeneration)

users
  |> Object.values
  |> groupByGeneration
  |> JSON.stringify
  |> alert
