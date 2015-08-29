Meteor.startup(function() {
  return Meteor.methods({
    removeAllGifs: function() {
      return GifList.remove({});
    }
  });
});

Meteor.publish('gifList', function () {
  return GifList.find();
});