import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount () {
    console.log(111111)
  }
  render () {
    return (
      <div>
        <h1>hello, its test page</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}
