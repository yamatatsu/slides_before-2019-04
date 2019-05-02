import { transform } from '@babel/core/lib/transform'
import stringify from 'json-stringify-pretty-compact'

// for eval
import _ from 'lodash'
import * as fp from 'lodash/fp'
import * as R from 'ramda'
import * as I from 'immutable'
import * as SI from 'seamless-immutable'
import _produce from 'immer'
import * as mori from 'mori'
import * as powerAssign from 'power-assign'

const produce = _produce
const update = powerAssign.assign

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  plugins: [
    [require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
    require("@babel/plugin-proposal-optional-chaining"),
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
}

export default function evalPipe(code) {
  const res = eval(transform(code, transformOptions).code)
  return stringify(res)
}
