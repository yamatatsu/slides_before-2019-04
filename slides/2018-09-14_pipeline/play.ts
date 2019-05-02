import * as R from 'ramda'

const data = {
  a: {
    b: {
      c: 1,
    }
  }
}

const cLens = R.lens((d: typeof data) => d.a.b.c, R.assocPath(['a','b','c']))

console.log(R.set(cLens, 5, data))
