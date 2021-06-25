import React, { Component } from 'react'
import { connect } from 'react-redux'
import {set_User} from './store/action'
 class App extends Component {
   render() {
    console.log(" app . js props ==> ", this.props)
    return (
      <div>
        <h1>pak</h1>
        <button onClick={()=>this.props.set_User()}>Set User</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  users: state.users})

const mapDispatchToProps = (dispatch) => ({
  set_User: () => dispatch(set_User())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);