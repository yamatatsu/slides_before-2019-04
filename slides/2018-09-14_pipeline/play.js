console.log("============ play start ==============")

const { transform: transformWithBabel } = require('@babel/core')

const transformOptions = {
  babelrc: false,
  "plugins": [
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
  ]
}

const transform = (code) => transformWithBabel(code, transformOptions)

// const precode = `

// const add = (n, m) => n + m
// const multiplied = (n, m) => n * m

// const add10 = n => add(10, n)
// const multiplied3 = n => multiplied(3, n)

// console.log(1 |> add10 |> multiplied3)
// `

const precode = `
Pr
console.log((await Promise.resolve([1,2,3])) |> (nums => nums.map(n => n*2)))
`

const { code } = transform(precode)
console.log(code)
eval(code)


console.log("============ play end ================")
