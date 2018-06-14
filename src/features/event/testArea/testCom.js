import React, { Component } from 'react'
import { connect } from "react-redux";
import {incrementCounter, decrementCounter} from './testActionCreator'
import {Button} from 'semantic-ui-react'
const actions = {
  incrementCounter, decrementCounter
}
 class TestCom extends Component {
  render() {
    const { incrementCounter, decrementCounter,data}=this.props
    return <div>
        <h1> this is a test : {data}</h1>
        <Button onClick={incrementCounter} color="green" content="INCREMENT" />
        <Button onClick={decrementCounter} color="red" content="DECREMENT" />
      </div>;
  }
}
const mapStateToProps =(state)=>({
    data:state.test.data
})

export default connect(mapStateToProps,actions)(TestCom)