Meteor.publish('rtGif', function () {
  return RTGif.find();
});