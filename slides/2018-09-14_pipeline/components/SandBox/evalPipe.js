import { transform } from '@babel/core/lib/transform'

// for eval
import _ from 'lodash'
import * as fp from 'lodash/fp'
import * as R from 'ramda'

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  plugins: [
    [require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
    require("@babel/plugin-proposal-optional-chaining"),
  ],
}

export default function evalPipe(code) {
  eval(transform(code, transformOptions).code)
}
