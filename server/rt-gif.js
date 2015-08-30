Meteor.startup(function() {
  return Meteor.methods({
    removeAllRTQueries: function() {
      return RTGif.remove({});
    }
  });
});

Meteor.publish('rtGif', function () {
  return RTGif.find({}, {sort: {date_created: -1}})
});

