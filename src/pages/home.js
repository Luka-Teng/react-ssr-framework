import React, { Component } from 'react'
import '../assets/home.less'
import icon from '../assets/icon.png'
export default class Home extends Component {
  render () {
    return (
      <div>
        <img src={icon} />
        <h1>hello, its home page</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}
