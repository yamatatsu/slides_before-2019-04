import React, { Component, Fragment } from 'react'

import evalPipe from './evalPipe'
import Editor from './Editor'

// for eval
import lodash from 'lodash'
import lodashFp from 'lodash/fp'
import ramda from 'ramda'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { code: props.initial }
  }
  setCode(code) { this.setState({ code }) }
  eval() {
    const R = ramda
    evalPipe(this.state.code)
  }
  render() {
    return (
      <Fragment>
        <Editor
          onChange={(code) => this.setCode(code)}
          code={this.state.code}
          commands={[{
            name: 'exec',
            bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
            exec: () => this.eval(),
          }]}
        />
        <button onClick={() => this.eval()}>
          exec( cmd + enter )
        </button>
      </Fragment>
    );
  }
}
