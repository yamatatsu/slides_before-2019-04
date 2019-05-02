const data = [1, 2, 3]

const { map } = R
// さっきのは `map(n => n * 2, data)`
const mapDouble = map(n => n * 2)

alert(mapDouble(data))

// なのでこう書ける
// alert(data |> mapDouble)
