import React, { Component } from 'react'
import Palette from "./Palette"
import { connect } from "react-redux";
import * as actions from "../actions/paletteActions"
import "../styles/container.scss"

class PaletteContainer extends Component {

  render() {
    console.log(this.props)

    let paletteArray = [];
    for (let i = 0; i < this.props.palette.numOfPalettes; i++) {
        paletteArray.push(<Palette palette={this.props.paletteContainer.palette} handleClick={this.props.loadPalette} key={i + `${this.props.paletteContainer.palette[i]}+`} />
      );
    }

    let addPalettes = (num) => {
      num = this.props.palette.numOfPalettes;
      this.props.addPalette(num)
    }

    return (
      <div className="container">
        <div className="container__boxes">
          {paletteArray}
        </div>
        <button className="container__button" onClick={addPalettes}>
          Add Another Palette
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(PaletteContainer);