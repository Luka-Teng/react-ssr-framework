import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({template}) => {
  return template
})
export default class Test extends Component {
  // 需要与获取的内容，用于服务端的渲染
  static fetch = (store) => {
    return store.dispatch({
      type: 'templateTest'
    })
  }

  componentDidMount () {
    // 对有进行服务端资源预获取的组件，最好要对状态进行验证
  }

  render () {
    return (
      <div>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}
