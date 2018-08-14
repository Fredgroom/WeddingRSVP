import React, { Component } from 'react';
import {RSVP} from '../../imports/api/rsvp';
import { withTracker } from 'meteor/react-meteor-data';

class Host extends Component {
    renderAllRSVP() {
        return this.props.rsvp.map((rsvp, i) => (

            <tr key={i}>
                <td>{rsvp.firstName}</td>
                <td>{rsvp.lastName}</td>
                <td>{rsvp.Rsvp}</td>
                <td>{rsvp.dietRequirements}</td>
                <td>{rsvp.allergies}</td>
                <td>{rsvp.Transport}</td>
                <td>{rsvp.songNameToDanceTo}</td>
                <td>{rsvp.songArtistToDanceTo}</td>
            </tr>

        ));

    };

    render(){
        return(
            <div> 
                <h1> Host </h1>
                <p>something</p>
                <table>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>RSVP</th>
                    <th>Dietary Requirements</th>
                    <th>Allergies</th>
                    <th>Transport To Venue</th>
                    <th>Song Name</th>
                    <th>Artist Name</th>
                    {this.renderAllRSVP()}
                </table>
            </div>
            
        )
    }
}
export default withTracker(() => {
    return {
        rsvp: RSVP.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(Host);