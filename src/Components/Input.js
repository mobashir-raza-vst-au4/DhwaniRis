import React, { Component } from 'react'

export default class Input extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="input_box">
                <input onKeyDown={this.props.onKeyDown} type="text" id={this.props.id} value={this.props.value} onChange={this.props.onChange} maxLength="4" onKeyUp={this.props.onKeyUp}></input>
            </div>
        )
    }
}
