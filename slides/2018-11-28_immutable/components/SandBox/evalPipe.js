import { transform } from '@babel/core/lib/transform'
import stringify from 'json-stringify-pretty-compact'

// for eval
const _ = require('lodash')
const fp = require('lodash/fp')
const R = require('ramda')
const I = require('immutable')
const SI = require('seamless-immutable')
const _produce = require('immer')
const mori = require('mori')
const powerAssign = require('power-assign')

const produce = _produce
const update = powerAssign.assign

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  plugins: [
    [
      require('@babel/plugin-proposal-pipeline-operator'),
      { proposal: 'minimal' },
    ],
    require('@babel/plugin-proposal-optional-chaining'),
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
}

export default function evalPipe(code) {
  const res = eval(transform(code, transformOptions).code)
  return stringify(res)
}
