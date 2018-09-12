import { Mongo } from 'meteor/mongo';

export const RSVP = new Mongo.Collection('rsvp');


if (Meteor.isserver) {

  RSVP.allow({
    'insert': function (_Id, doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
  });
}


