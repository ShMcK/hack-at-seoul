Meteor.publish('rtGif', function () {
  return RTGif.find({}, {sort: {date_created: -1}})
});