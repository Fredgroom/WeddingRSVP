import React, { Component } from 'react';
import { RSVP } from '../../imports/api/rsvp';
import RSVPallResults from '../../imports/ui/rsvp'
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class Host extends Component {
    renderAllRSVP() {
        return this.props.rsvp.map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ));
    };

    renderAcceptedRSVP() {
        return this.props.rsvp.filter(Accepted => {

            return Accepted.Rsvp === 'Accepted'
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName
            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ))
    };

    renderDeclinedRSVP() {
        return this.props.rsvp.filter(Declined => {

            return Declined.Rsvp === 'Declined'
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName
            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ))
    };

    renderDietaryRequirementsRSVP() {
        return this.props.rsvp.filter(DietaryReq => {

            return DietaryReq.dietRequirements ? DietaryReq.dietRequirements !== 'none' : false;
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName,
                dietRequirements: obj.dietRequirements

            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ))
    };

    renderAllergiesRSVP() {
        return this.props.rsvp.filter(Allergy => {

            return Allergy.allergies ? Allergy.allergies !== 'none' : false;
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName,
                allergies: obj.allergies

            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} display={['firstName', 'lastName', 'allergy']} />
        ))
    };

    renderSongChoiceRSVP() {
        return this.props.rsvp.filter(SongName => {

            return SongName.songNameToDanceTo ? SongName.songNameToDanceTo !== 'none' : false;
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName,
                songArtistToDanceTo: obj.songArtistToDanceTo,
                songNameToDanceTo: obj.songNameToDanceTo

            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ))
    };

    renderGuestTransportRSVP() {
        return this.props.rsvp.filter(VenueTransport => {

            return VenueTransport.Transport === 'Accepted';
        }
        ).map(obj => {
            return {
                firstName: obj.firstName,
                lastName: obj.lastName,

            }
        }).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ))
    };

    render() {
        return (
            <div>
                <h1> Host </h1>
                <p>something</p>
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography> All RSVP info</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
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
                                    {this.renderAllRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Guests</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderAcceptedRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Guests with Dietary Requirements</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Dietary Requirements</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderDietaryRequirementsRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Guests with Allergies</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Allergy</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderAllergiesRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Songs to get Guests Dancing!</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Song Name</TableCell>
                                        <TableCell>Artist Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderSongChoiceRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Guests who want Transport to Venue!</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderGuestTransportRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>List of Declined RSVP</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Table style={{tableLayout: 'auto'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.renderDeclinedRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

            </div>

        )
    }

}

export default withTracker(() => {
    return {
        rsvp: RSVP.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Host); 