import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const RSVP = new Mongo.Collection('rsvp');



if(Meteor.isserver) {

    RSVP.allow({
      'insert': function (_Id,doc) {
        /* user and doc checks ,
        return true to allow insert */
        return true; 
      }
    });
  
  }

Meteor.methods({
    'rsvp.toggleComplete' (rsvp) {
      if (rsvp.owner !== this.userId) {
        throw new Meteor.Error('todos.toggleComplete.not-authorized',
          'You are not allowed to update to-dos for other users.');
      }
      RSVP.update(rsvp._id, {
        $set: { complete: !rsvp.complete },
      });
    },
  });
