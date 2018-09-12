import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const RSVPschema = new SimpleSchema({
    firstName: {type: String},
    lastName: {type: String},
    rsvpInput: {type: String},
    dietRequirements: {type: String},
    allergies: {type: String},
    Transport: {type: String},
    songNameToDanceTo: {type: String},
    songArtistToDanceTo: {type: String},
    
  });
