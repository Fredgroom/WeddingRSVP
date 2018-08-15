import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


// RSVP component - represents a single rsvp item

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});
class RSVPallResults extends Component {
  render() {
    return (
    <TableRow>
      <TableCell>{this.props.rsvp.firstName}</TableCell>
      <TableCell>{this.props.rsvp.lastName}</TableCell>
      <TableCell>{this.props.rsvp.Rsvp}</TableCell>
      <TableCell>{this.props.rsvp.dietRequirements}</TableCell>
      <TableCell>{this.props.rsvp.allergies}</TableCell>
      <TableCell>{this.props.rsvp.Transport}</TableCell>
      <TableCell>{this.props.rsvp.songNameToDanceTo}</TableCell>
      <TableCell>{this.props.rsvp.songArtistToDanceTo}</TableCell>
  </TableRow>

    );
  }
}

export default (RSVPallResults);