import React, { Component } from 'react'
import Box from "./Box"
import { connect } from "react-redux";
import * as actions from "../actions/containerActions"
import "../styles/container.scss"

class Container extends Component {

  render() {

    return (
      <div className="container">
        <div className="container__boxes">
        <Box color={this.props.container.color} handleClick={this.props.loadColor}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(Container);