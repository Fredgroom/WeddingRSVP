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
        {this.props.display.firstName ? <TableCell>{this.props.rsvp.firstName}</TableCell> : '' }
        {this.props.display.lastName ? <TableCell>{this.props.rsvp.lastName}</TableCell> : '' }
        {this.props.display.rsvp ? <TableCell>{this.props.rsvp.rsvp}</TableCell> : '' }
        {this.props.display.dietRequirements ? <TableCell>{this.props.rsvp.dietRequirements}</TableCell> : '' }
        {this.props.display.allergies ? <TableCell>{this.props.rsvp.allergies}</TableCell> : '' }
        {this.props.display.Transport ? <TableCell>{this.props.rsvp.Transport}</TableCell> : '' }
        {this.props.display.songNameToDanceTo ? <TableCell>{this.props.rsvp.songNameToDanceTo}</TableCell> : '' }
        {this.props.display.songArtistToDanceTo ? <TableCell>{this.props.rsvp.songArtistToDanceTo}</TableCell> : '' }
      </TableRow>
    )}; 
}

export default (RSVPallResults);