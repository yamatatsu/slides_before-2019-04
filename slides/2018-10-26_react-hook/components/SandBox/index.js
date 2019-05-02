import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-grid-system'

import evalPipe from './evalPipe'
import Editor from './Editor'

const _key = 'keyyyyyyyyyyyyy'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.initial,
    }
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
    const Sample = this.state.result
    return (
      <Container>
        <Row><p>{this.props.title}</p></Row>
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
              render( cmd + enter )
            </button>
          </Col>
          <Col sm={12} md={4}>
            <p>===================</p>
            {Sample && <Sample cacheKey={_key} />}
          </Col>
        </Row>
      </Container>
    );
  }
}
