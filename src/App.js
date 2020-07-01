import './App.css';
import Input from './Components/Input';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: ""
  }

  moveCursorForward = (fromTextBox, toTextBox) => {
    console.log("calling.....", fromTextBox.length)
      if(fromTextBox.length === 4){
        document.getElementById(toTextBox).focus();
      }
  }

  handleInput1 = (e) => {
    var value = e.target.value;
    console.log(value.length);
    this.setState({
      input1: value
    })
  }

  handleInput2 = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({
      input2: value
    })
  }

  handleInput3 = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({
      input3: value
    })
  }

  handleInput4 = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({
      input4: value
    })
  }

  moveCursorBackward = (event, value, id) => {
    console.log("djjd",event.keyCode);
    console.log("LENGRH>>",value.length)
    if(event.keyCode === 8 && value.length === 0){
      console.log("calling movecursor")
      document.getElementById(id).focus();   
    }
  }



  render() {
    return (
      <div className="parent_input">
        <span>Card Number*</span>
        <Input id="txt1" value={this.state.input1} onKeyDown={(event) => {this.moveCursorBackward(event, this.state.input1, "txt1")}} onChange={(e) => {this.handleInput1(e)}} onKeyUp={() => {this.moveCursorForward(this.state.input1,"txt2")}}/>
        <Input id="txt2" value={this.state.input2} onKeyDown={(event) => {this.moveCursorBackward(event, this.state.input2, "txt1")}} onChange={(e) => {this.handleInput2(e)}} onKeyUp={() => {this.moveCursorForward(this.state.input2,"txt3")}}/>
        <Input id="txt3" value={this.state.input3} onKeyDown={(event) => {this.moveCursorBackward(event, this.state.input3, "txt2")}} onChange={(e) => {this.handleInput3(e)}} onKeyUp={() => {this.moveCursorForward(this.state.input3,"txt4")}}/>
        <Input id="txt4" value={this.state.input4} onKeyDown={(event) => {this.moveCursorBackward(event, this.state.input4, "txt3")}} onChange={(e) => {this.handleInput4(e)}}/>
      </div>
    )
  }
}