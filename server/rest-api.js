Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('text', {authRequired: false}, {
  post: {

  }
});