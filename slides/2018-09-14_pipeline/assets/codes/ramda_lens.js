const data = {
  a: {
    b: {
      c: 12,
    }
  },
}

const { lensPath, over, set, view } = R
const cLens = lensPath(['a', 'b', 'c']);

data
  |> over(cLens, n => n * 3)
  |> JSON.stringify
  |> alert
