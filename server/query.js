// clean out initial events
Meteor.startup(function() {
  return Meteor.methods({
    removeAllQueries: function() {
      return Query.remove({});
    }
  });
});

Meteor.publish('query', function () {
  return Query.findOne();
});

Query.before.insert(function(userId, doc) {
  var query = doc.query;
  console.log('query', query);
  console.log(Meteor.call('insertGiphy', query));
  // set query as first query
});