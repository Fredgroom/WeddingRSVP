import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class RSVP extends Component {
  render() {
    return (
      
      <li>{this.props.rsvp.firstName} {this.props.rsvp.lastName} {this.props.rsvp.Rsvp} {this.props.rsvp.DietReq} {this.props.rsvp.Allergy} {this.props.rsvp.Contact} </li>
    );
  }
}