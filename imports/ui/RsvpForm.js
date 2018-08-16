import { Component } from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import  RSVPallResults  from './rsvp.js';
import { RSVP } from '../api/rsvp.js';
import AccountsUIWrapper from './accounts.js';
import { on } from 'cluster';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



// App component - represents the whole app
class RsvpForm extends Component {
    constructor(props) {
        super(props);
        // Find the text field via the React ref
        this.state = {
            firstName: '',
            lastName: '',
            rsvpInput: '',
            dietRequirements: '',
            allergies: '',
            Transport: '',
            songNameToDanceTo: '',
            songArtistToDanceTo: ''
        };
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
            rsvpInput: this.state.rsvpInput,
            dietRequirements: this.state.dietRequirements,
            allergies: this.state.allergies,
            Transport: this.state.Transport,
            songNameToDanceTo: this.state.songNameToDanceTo,
            songArtistToDanceTo: this.state.songArtistToDanceTo,
            createdAt: new Date(), // current time
        });

        // Clear form
        this.setState({
            firstName: '',
            lastName: '',
            rsvpInput: '',
            dietRequirements: '',
            Transport: '',
            allergies: '',
            songNameToDanceTo: '',
            songArtistToDanceTo: ''
        })
    };

    renderEverythingRSVP() {
        var displayOptions = {
          firstName: true,
          lastName: true,
          rsvpInput: true,
          dietRequirements: true,
          allergies: true,
          Transport: true,
          songNameToDanceTo: true,
          songArtistToDanceTo: true
        };
        return (
          <div>
            <RSVPallresults rsvp={rsvp} display={displayOptions} />
          </div>
        );
      }
    

    render() {
        return (
            <div className="container">
                <header>
                    <h1>RSVP</h1>
                </header>
                <AccountsUIWrapper />
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
                                name="rsvpInput"
                                type="radio"
                                onChange={this.handleChange}
                                value="Accepted"
                                checked={this.state.rsvpInput === "Accepted"}

                            />
                            Accept
                        </label>
                        <label>
                            <input
                                name="rsvpInput"
                                type="radio"
                                onChange={this.handleChange}
                                value="Declined"
                                checked={this.state.rsvpInput === "Declined"}
                            />
                            Decline
                        </label>
                    </div>
                    <p>Do you have any specific diet requirements?</p>
                    <select name="dietRequirements"
                        type="text"
                        ref="textInput"
                        placeholder="Diet Requirements?"
                        onChange={this.handleChange}
                        value={this.state.dietRequirements}>
                        <option value="none">None</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                        <option value="Lacto-Ovo Vegetarian">Lacto-Ovo Vegetarian</option>
                        <option value="Pescetarian">Pescetarian</option>
                    </select><br />
                    <p>Do you have any allergies?</p>
                    <input
                        name="allergies"
                        type="text"
                        ref="textInput"
                        placeholder="Allergies?"
                        onChange={this.handleChange}
                        value={this.state.allergies}
                    /><br />
                    {/* Need to expand this to be more specific with Song and Artist */}
                    <p>Will you want transport from the Church to the Reception?</p>
                    <label>
                        <input
                            name="Transport"
                            type="radio"
                            onChange={this.handleChange}
                            value="Accepted"
                            checked={this.state.Transport === "Accepted"}

                        />
                        Accept
                        </label>
                    <label>
                        <input
                            name="Transport"
                            type="radio"
                            onChange={this.handleChange}
                            value="Declined"
                            checked={this.state.Transport === "Declined"}
                        />
                        Decline
                        </label>
                    <p>What song will get you on the dance floor?</p>
                    <input
                        name="songNameToDanceTo"
                        type="text"
                        ref="textInput"
                        placeholder="Song Name"
                        onChange={this.handleChange}
                        value={this.state.songNameToDanceTo}
                    />
                    <input
                        name="songArtistToDanceTo"
                        type="text"
                        ref="textInput"
                        placeholder="Artist Name"
                        onChange={this.handleChange}
                        value={this.state.songArtistToDanceTo}
                    /><br />

                    <button type='submit'>Submit RSVP</button>
                </form>
            </div>
        );
    }
}

export default (RsvpForm);
