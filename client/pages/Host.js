import React, { Component } from 'react';
import { RSVP } from '../../imports/api/rsvp';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

            <TableRow key={i}>
                <TableCell>{rsvp.firstName}</TableCell>
                <TableCell>{rsvp.lastName}</TableCell>
                <TableCell>{rsvp.Rsvp}</TableCell>
                <TableCell>{rsvp.dietRequirements}</TableCell>
                <TableCell>{rsvp.allergies}</TableCell>
                <TableCell>{rsvp.Transport}</TableCell>
                <TableCell>{rsvp.songNameToDanceTo}</TableCell>
                <TableCell>{rsvp.songArtistToDanceTo}</TableCell>
            </TableRow>

        ));

    };

    render() {
        return (
            <div>
                <h1> Host </h1>
                <p>something</p>
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
                    {this.renderAllRSVP()}
                </Table>
            </div>

        )
    }
    
}
export default withTracker(() => {
    return {
        rsvp: RSVP.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Host); 