import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Tasks extends Component {
  render() {
    return (
      <li>{this.props.task.firstName} {this.props.task.lastName} {this.props.task.Rsvp} {this.props.task.DietReq} {this.props.task.Allergy} {this.props.task.Contact} </li>
    );
  }
}