import { Component } from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import { RSVP } from '../api/rsvp.js';
import { on } from 'cluster';


// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);
        // Find the text field via the React ref
        this.state = { newRSVPValue: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        RSVP.insert({
            firstName: this.state.firstName,
            createdAt: new Date(), // current time
        });

        // Clear form
        this.setState({ firstName: '' })
    };

    renderRSVP() {
        return this.props.rsvp.map((rsvp, i) => (
            <li key={i}>{rsvp.firstName} {rsvp.lastName} {rsvp.Rsvp} {rsvp.DietReq} {rsvp.Allergy} {rsvp.Contact} </li>
        ));

    };


    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <form className="new-rsvp" onSubmit={this.handleSubmit.bind(this)} >
                    <input
                        name="firstName"
                        type="text"
                        ref="textInput"
                        placeholder="new rsvp"
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />
                </form>

                <ul>
                    {this.renderRSVP()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        rsvp: RSVP.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(App);

