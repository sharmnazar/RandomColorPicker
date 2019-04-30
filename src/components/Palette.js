import React, { Component } from 'react'
import "../styles/palette.scss"

export default class Palette extends Component {

  render() {
    console.log(this.props)

    let newPalette = this.props.palette.map((each) => {
      return <div className="palette__main" style={{backgroundColor:`${each}`}}>
                <p className="palette__main__color">{each}</p>
              </div>
    })

    return (
      <>
      <div className="palette">
        {newPalette}
        
      </div>
      <button className="button" onClick={this.props.handleClick}>
        Change Palette!
      </button> 
      </>

    )
  }
}
