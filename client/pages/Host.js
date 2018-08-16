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
    renderAllRSVP(displayOptions) {
        /*var displayOptions = {
            firstName: true,
            lastName: true,
            Rsvp: true,
            dietRequirements: true,
            allergies: true,
            Transport: true,
            songNameToDanceTo: true,
            songArtistToDanceTo: true
          };*/

        return this.props.rsvp.map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} display={displayOptions} />
        ));
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: true,
                                        dietRequirements: true,
                                        allergies: true,
                                        Transport: true,
                                        songNameToDanceTo: true,
                                        songArtistToDanceTo: true})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: true,
                                        dietRequirements: false,
                                        allergies: false,
                                        Transport: false,
                                        songNameToDanceTo: false,
                                        songArtistToDanceTo: false})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: false,
                                        dietRequirements: true,
                                        allergies: false,
                                        Transport: false,
                                        songNameToDanceTo: false,
                                        songArtistToDanceTo: false})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: false,
                                        dietRequirements: false,
                                        allergies: true,
                                        Transport: false,
                                        songNameToDanceTo: false,
                                        songArtistToDanceTo: false})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: false,
                                        dietRequirements: false,
                                        allergies: false,
                                        Transport: false,
                                        songNameToDanceTo: true,
                                        songArtistToDanceTo: true})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: true,
                                        dietRequirements: false,
                                        allergies: false,
                                        Transport: true,
                                        songNameToDanceTo: false,
                                        songArtistToDanceTo: false})}
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
                                    {this.renderAllRSVP({
                                        firstName: true,
                                        lastName: true,
                                        Rsvp: true,
                                        dietRequirements: false,
                                        allergies: false,
                                        Transport: false,
                                        songNameToDanceTo: false,
                                        songArtistToDanceTo: false})}
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