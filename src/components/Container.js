import React, { Component } from 'react'
import Box from "./Box"
import { connect } from "react-redux";
import * as actions from "../actions/mainAction"
import "../styles/box.scss"

class Container extends Component {

  render() {

    let boxArray = [];
    for (let i = 0; i < this.props.box.numOfBoxes; i++) {
      boxArray.push(<Box color={this.props.main.color} handleClick={this.props.loadColor} key={i + `${this.props.color}+`} />
      );
    }

    let addBoxes = (num) => {
      num = this.props.box.numOfBoxes;
      this.props.addBox(num)
    }

    return (
      <>
        <h1 className="title">Random Color Picker</h1>

        <div className="container">
          {boxArray}
        </div>

        <button className="addBox" onClick={addBoxes}>
            Add Another Color Picker
        </button>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(Container);