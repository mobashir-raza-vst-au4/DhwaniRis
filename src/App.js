import './App.css';
import Input from './Components/Input';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  }

  handleInput1 = (e) => {
    var value = e.target.value;
    console.log(value.length)
    if(value.length === 6) {
      var number = value.match(/.{1,1}/g);
      console.log("tt", number)
      this.setState({
        input1: number[0],
        input2: number[1],
        input3: number[2],
        input4: number[3],
        input5: number[4],
        input6: number[5],
      })
      this.sixthCard.focus();
    }else if(value.length <= 1) {
      this.setState({
        input1: value
      })
      if(value.length === 1) {
        this.secondCard.focus();
      }
    }else{
      return false;
    }
    
  }

  handleInput2 = (e) => {
    let value = e.target.value;
    if(value.length > 1){
      return false;
    }
    this.setState({
      input2: value
    })
    if(value.length === 1) {
      this.thirdCard.focus();
    }
    if(value.length < 1){
      this.firstCard.focus();
    }
  }

  handleInput3 = (e) => {
    let value = e.target.value;
    if(value.length > 1){
      return false;
    }
    this.setState({
      input3: value
    })
    if(value.length === 1) {
      this.forthCard.focus();
    }
    if(value.length < 1){
      this.secondCard.focus();
    }
  }

  handleInput4 = (e) => {
    let value = e.target.value;
    if(value.length > 1) {
      return false
    }
    this.setState({
      input4: value
    })
    if(value.length === 1) {
      this.fifthCard.focus();
    }
    if(value.length < 1){
      this.thirdCard.focus();
    }
  }

  handleInput5 = (e) => {
    let value = e.target.value;
    if(value.length > 1) {
      return false
    }
    this.setState({
      input5: value
    })
    if(value.length === 1) {
      this.sixthCard.focus();
    }
    if(value.length < 1){
      this.forthCard.focus();
    }
  }

  handleInput6 = (e) => {
    let value = e.target.value;
    if(value.length > 1) {
      return false
    }
    this.setState({
      input6: value
    })
    if(value.length < 1){
      this.fifthCard.focus();
    }
  }

  render() {
    return (
      <div className="parent_input">
        <span>Card Number*</span>
        <Input reference={(number) => {this.firstCard=number}} id="txt1" value={this.state.input1} onChange={(e) => {this.handleInput1(e)}} />
        <Input reference={(number) => {this.secondCard=number}} id="txt2" value={this.state.input2} onChange={(e) => {this.handleInput2(e)}} />
        <Input reference={(number) => {this.thirdCard=number}} id="txt3" value={this.state.input3} onChange={(e) => {this.handleInput3(e)}} />
        <Input reference={(number) => {this.forthCard=number}} id="txt4" value={this.state.input4} onChange={(e) => {this.handleInput4(e)}}/>
        <Input reference={(number) => {this.fifthCard=number}} id="txt5" value={this.state.input5} onChange={(e) => {this.handleInput5(e)}}/>
        <Input reference={(number) => {this.sixthCard=number}} id="txt6" value={this.state.input6} onChange={(e) => {this.handleInput6(e)}}/>
      </div>
    )
  }
}