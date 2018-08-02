const test = async (action, put) => {
  console.log(111111)
  put({type: 'template/action', payload: { author: 'lll' }})
}

export default {
  test
}
