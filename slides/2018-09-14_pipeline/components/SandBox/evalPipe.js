import { transform } from '@babel/core/lib/transform'

// for eval
const _ = require('lodash')
const fp = require('lodash/fp')
const R = require('ramda')

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  plugins: [
    [
      require('@babel/plugin-proposal-pipeline-operator'),
      { proposal: 'minimal' },
    ],
    require('@babel/plugin-proposal-optional-chaining'),
  ],
}

export default function evalPipe(code) {
  eval(transform(code, transformOptions).code)
}
