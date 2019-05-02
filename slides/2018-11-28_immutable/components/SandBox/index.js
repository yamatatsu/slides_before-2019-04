import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-grid-system'

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
  eval = () => {
    try {
      const result = evalPipe(this.state.code)
      this.setState({ result })
    } catch (e) {
      alert(e)
    }
  }
  render() {
    return (
      <Container>
        <a href={this.props.doc} target="_blank" rel="noreferrer noopener">Doc</a>
        <Row>
          <Col sm={12} md={8}>
            <Editor
              onChange={(code) => this.setCode(code)}
              code={this.state.code}
              commands={[{
                name: 'exec',
                bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
                exec: () => this.eval(),
              }]}
            />
            <button onClick={this.eval}>
              exec( cmd + enter )
            </button>
          </Col>
          <Col sm={12} md={4}>
            <textarea value={this.state.result} rows='40' cols='50' />
          </Col>
        </Row>
      </Container>
    );
  }
}
