Meteor.publish('gifList', function () {
  return GifList.find();
});