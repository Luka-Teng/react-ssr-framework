import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/test'>RouterInfos</Link></li>
          <li><Link to='/first'>First</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}
