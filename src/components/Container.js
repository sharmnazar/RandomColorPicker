import React, { Component } from 'react'
import Box from "./Box"
import { connect } from "react-redux";
import * as actions from "../actions/containerActions"
import "../styles/container.scss"

class Container extends Component {

  render() {

    let boxArray = [];
    for (let i = 0; i < this.props.box.numOfBoxes; i++) {
      boxArray.push(<Box color={this.props.box.color} handleClick={this.props.loadColor} key={i + `${this.props.box.color}+`} />
      );
    }

    let addBoxes = (num) => {
      num = this.props.box.numOfBoxes;
      this.props.addBox(num)
    }

    return (
      <div className="container">
        <div className="container__boxes">
          {boxArray}
        </div>
        <button className="container__button" onClick={addBoxes}>
          Add Another Color Picker
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(Container);