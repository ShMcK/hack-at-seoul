Meteor.publish('events', function () {
  setInterval(function() {
    return 'left';
  }, 5000);
});