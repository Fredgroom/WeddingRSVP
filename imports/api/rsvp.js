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
  // Meteor.methods({
  // addRsvp(rsvp){
  //   if(!Meteor.userId()){
  //     throw new Meteor.Error('Please sign in')
  //   }
  // }
  // });
  }


