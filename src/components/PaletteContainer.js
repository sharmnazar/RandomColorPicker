import React, { Component } from 'react'
import Palette from "./Palette"
import { connect } from "react-redux";
import * as actions from "../actions/paletteActions"
import "../styles/container.scss"

class PaletteContainer extends Component {

  render() {
    
    return (
      <div className="container">
        <div className="container__boxes">
          <Palette palette={this.props.paletteContainer.palette} handleClick={this.props.loadPalette} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(PaletteContainer);