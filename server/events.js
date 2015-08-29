// clean out initial events
Meteor.startup(function() {
  return Meteor.methods({
    removeAllEvents: function() {
      return Events.remove({});
    }
  });
});

Meteor.publish('events', function () {
  return Events.find();
});

Events.before.insert(function(userId, doc) {
  var event = doc.event;
  // event code
});