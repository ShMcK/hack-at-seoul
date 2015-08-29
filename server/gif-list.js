Meteor.publish('gif-list', function () {
  return GifList.find();
});