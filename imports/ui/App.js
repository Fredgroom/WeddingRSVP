import {Component}  from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { RSVP } from '../api/rsvp.js';
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
 
  renderRSVP() {
    return this.props.rsvp.map((rsvp, i) => (
        <li key={i}>{rsvp.firstName} {rsvp.lastName} {rsvp.Rsvp} {rsvp.DietReq} {rsvp.Allergy} {rsvp.Contact} </li>
      ));
    
    }
  
 
  render() {
    return (
      <div className="container"> 
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderRSVP()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
    return {
      rsvp: RSVP.find({}).fetch(),
    };
  })(App);

