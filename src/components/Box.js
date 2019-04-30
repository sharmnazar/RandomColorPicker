import React, { Component } from 'react'
import "../styles/box.scss"

export default class Box extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="box" style={{backgroundColor:`${this.props.color}`}}>
                    <button className="box__button" onClick={this.props.handleClick}>
                        Change Color!
                    </button>
                </div>
                <h4 className="box__color">Current Color: {this.props.color}</h4>
            </div>
        )
    }
}
