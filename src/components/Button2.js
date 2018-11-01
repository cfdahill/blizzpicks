import React, {Component} from "react";
import {Button} from "react-bootstrap";

export default class Button2 extends Component {
  state = {
    picked:'notPicked'
  }

changeClass() {
  this.setState({picked: 'picked'});
}

  render(){
    return(
    <Button onClick={e=>changeClass()} className={`pickButton ${this.state.picked}`}>{this.props.name}</Button>
    )
    }

}

