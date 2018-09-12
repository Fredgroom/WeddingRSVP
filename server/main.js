import '../imports/api/rsvp.js';
import { Meteor } from 'meteor/meteor';
import { RSVP } from '../imports/api/rsvp.js'

Meteor.startup(() => {

});
// Deny all client-side updates on the RSVP collection
RSVP.allow({
  insert: function(userId, docs) {
     return !!userId; 
    }
});

  Meteor.publish('rsvp', function () {
      return RSVP.find({}, { sort: { createdAt: -1 } })
  });

