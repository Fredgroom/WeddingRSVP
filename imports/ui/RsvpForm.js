import { Component } from 'react';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import RSVPallResults from './rsvp.js';
import { RSVP } from '../api/rsvp.js'
import { on } from 'cluster';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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

    renderAllRSVP(displayOptions) {

        return this.props.rsvp.map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} display={displayOptions} />
        ));
    };

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderDeclined() {
        console.log('declined');
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
            <RSVPallResults rsvp={this.props.rsvp} display={displayOptions} />


        );
    }


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
                        required
                    /><br />
                    <input
                        name="lastName"
                        type="text"
                        ref="textInput"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        value={this.state.lastName}
                        required
                    /><br />
                    <div>
                        <label>
                            <input
                                name="rsvpInput"
                                type="radio"
                                onChange={this.handleChange}
                                value="Accepted"
                                checked={this.state.rsvpInput === "Accepted"}
                                required
                            />
                            Accept
                        </label>
                        <label>
                            <input
                                name="rsvpInput"
                                type="radio"
                                onChange={this.handleChange}
                                onClick={() => this.renderDeclined()}
                                value="Declined"
                                checked={this.state.rsvpInput === "Declined"}
                                required
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

                    <button type='submit' >Submit RSVP</button>
                </form>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Your RSVP info</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Table style={{ tableLayout: 'auto' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>RSVP</TableCell>
                                    <TableCell>Dietary Requirements</TableCell>
                                    <TableCell>Allergies</TableCell>
                                    <TableCell>Transport To Venue</TableCell>
                                    <TableCell>Song Name</TableCell>
                                    <TableCell>Artist Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.renderAllRSVP({
                                    firstName: true,
                                    lastName: true,
                                    rsvpInput: true,
                                    dietRequirements: true,
                                    allergies: true,
                                    Transport: true,
                                    songNameToDanceTo: true,
                                    songArtistToDanceTo: true
                                })}
                            </TableBody>
                        </Table>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}
export default withTracker(() => {
    return {
        rsvp: RSVP.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(RsvpForm);

