import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class ACCOUNTS extends Component {
  render() {
    return (
      
      <li>{this.props.accounts.emailAddress} {this.props.accounts.password}  </li>
    );
  }
}
