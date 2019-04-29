import React, { Component } from 'react'
import Box from "./Box"
import {connect} from "react-redux";
import * as actions from "../actions/mainAction"

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h1>Random Colr Pickr</h1>
        <Box color={this.props.color} handleClick={this.props.loadColor}/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps, actions)(Container);