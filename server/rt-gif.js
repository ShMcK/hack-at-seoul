Meteor.publish('rt-gif', function () {
  return RTGif.find();
});