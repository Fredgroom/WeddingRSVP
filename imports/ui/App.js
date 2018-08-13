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
        this.state = { firstName: '', lastName: '', attending: '', declined: '', dietReq: ''};
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
            lastName: this.state.lastName,
            attending: this.state.attending,
            declined: this.state.declined,
            dietRequirements: this.state.dietReq,
            createdAt: new Date(), // current time
        });

        // Clear form
        this.setState({ firstName: '', lastName: '', attending: '', declined: '', dietReq: '' })
    };

    renderRSVP() {
        return this.props.rsvp.map((rsvp, i) => (
            <li key={i}>{rsvp.firstName} {rsvp.lastName} {rsvp.Rsvp} {rsvp.dietReq} {rsvp.Allergy} {rsvp.Contact} </li>
        ));

    };


    render() {
        return (
            <div className="container">
                <header>
                    <h1>RSVP</h1>
                </header>

                <form className="new-rsvp" onSubmit={this.handleSubmit.bind(this)} >
                    <input
                        name="firstName"
                        type="text"
                        ref="textInput"
                        placeholder="First Name"
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    /><br/>
                    <input
                        name="lastName"
                        type="text"
                        ref="textInput"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    /><br/>
                    <div>
                        <input type="checkbox" name="attending"
                            value="attending" onChange={this.handleChange}value={this.state.attending}/>
                        <label for="Accept">Accept</label>
                        <input type="checkbox" name="declined"
                            value="declined" onChange={this.handleChange}value={this.state.declined}/>
                        <label for="Decline">Decline</label>
                    </div>
                    {/* Input for Diet Requirements */}
                    <input
                        name="dietRequirements"
                        type="text"
                        ref="textInput"
                        placeholder="Diet Requirements?"
                        onChange={this.handleChange}
                        value={this.state.dietReq}
                    /><br/>

                    <button type='submit'>Submit RSVP</button>
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

