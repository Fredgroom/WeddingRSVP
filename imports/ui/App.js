import React, { Component } from 'react';
 
import Task from './Task.js';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
      { _id: 2, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
      { _id: 3, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}