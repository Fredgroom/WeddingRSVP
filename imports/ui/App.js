import { Component } from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { RSVP } from '../api/rsvp.js';
import { on } from 'cluster';


// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);
        // Find the text field via the React ref
        this.state = { firstName: '', lastName: '', Rsvp: '', dietRequirements: '', allergies: '', songToDanceTo: '' };
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
            Rsvp: this.state.Rsvp,
            dietRequirements: this.state.dietRequirements,
            allergies: this.state.allergies,
            songToDanceTo: this.state.songToDanceTo,
            createdAt: new Date(), // current time
        });

        // Clear form
        this.setState({ firstName: '', lastName: '', Rsvp: '', dietRequirements: '', allergies: '', songToDanceTo: '' })
    };

    renderRSVP() {
        return this.props.rsvp.map((rsvp, i) => (
            <li key={i}>{rsvp.firstName} {rsvp.lastName} {rsvp.Rsvp} {rsvp.dietRequirements} {rsvp.allergies} {rsvp.songToDanceTo} </li>
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
                    /><br />
                    <input
                        name="lastName"
                        type="text"
                        ref="textInput"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    /><br />
                    <div>
                        <label>
                            <input
                                name="Rsvp"
                                type="radio" 
                                onChange={this.handleChange}    
                                value="Accepted"                  
                                checked={this.state.Rsvp === "Accepted"}

                            />
                            Accept
                        </label>
                        <label>
                            <input
                                name="Rsvp"
                                type="radio"
                                onChange={this.handleChange}
                                value="Declined"                  
                                checked={this.state.Rsvp === "Declined"}
                            />
                            Decline
                        </label>
                    </div>
                    {/* Change Input for dietRequirements to Dropdown*/}
                    <input
                        name="dietRequirements"
                        type="text"
                        ref="textInput"
                        placeholder="Diet Requirements?"
                        onChange={this.handleChange}
                        value={this.state.dietRequirements}
                    />
                    <input
                        name="allergies"
                        type="text"
                        ref="textInput"
                        placeholder="Allergies?"
                        onChange={this.handleChange}
                        value={this.state.allergies}
                    /><br />
                    {/* Need to expand this to be more specific with Song and Artist */}
                    <input 
                        name="songToDanceTo"
                        type="text"
                        ref="textInput"
                        placeholder="What song will get you on the dancefloor?"
                        onChange={this.handleChange}
                        value={this.state.songToDanceTo}
                    /><br />
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
