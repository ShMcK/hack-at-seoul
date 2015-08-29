Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('/query/:text', {
  post: function () {
    var query = this.urlParams.text;
    console.log(query);
  }
});