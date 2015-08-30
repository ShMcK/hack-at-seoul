// clean out initial events
Meteor.startup(function() {
  return Meteor.methods({
    removeAllQueries: function() {
      return Query.remove({});
    },
    newQuery: function (queryWord) {
      Query.insert({query: queryWord});
    }
  });
});

Meteor.publish('query', function () {
  return Query.findOne();
});

Query.before.insert(function(userId, doc) {
  console.log(userId, doc);
  var query = doc.query;
  Meteor.call('insertGiphy', query);
  // set query as first query
});