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
        ).map((rsvp, i) => (
            <RSVPallResults rsvp={rsvp} key={i} />
        ));};

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
                            <Table>
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
                            <Typography>Expansion Panel 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Table>
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
                                {this.renderAcceptedRSVP()}
                                </TableBody>
                            </Table>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel disabled>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Disabled Expansion Panel</Typography>
                        </ExpansionPanelSummary>
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