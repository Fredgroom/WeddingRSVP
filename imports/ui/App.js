import {Component}  from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js';
import { on } from 'cluster';

 
// App component - represents the whole app
class App extends Component {
  getTasks() {
//     return [
//       { _id: 1, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
//       { _id: 2, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
//       { _id: 3, text: 'something', firstName: 'This is name 1', lastName: 'This is lastname 2', Rsvp: 'yes', DietReq: 'Diet Requirement', Allergy: 'Allergy1', Contact: 'address', Song: '' },
//     ];
  }
 
  renderTasks() {
    return this.props.tasks.map((task, i) => (
        <li key={i}>{task.firstName} {task.lastName} {task.Rsvp} {task.DietReq} {task.Allergy} {task.Contact} </li>
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

export default withTracker(() => {
    return {
      tasks: Tasks.find({}).fetch(),
    };
  })(App);

