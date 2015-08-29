//Api = new Restivus({
//  useDefaultAuth: true,
//  prettyJson: true
//});
//
//Api.addCollection(RTGif, {
//  excludedEndpoints: ['getAll', 'put'],
//  endpoints: {
//    post: {
//      authRequired: false
//    }
//  }
//});
//
//Api.addRoute('/query/:text', {
//  post: function () {
//    var query = this.urlParams.text;
//    console.log(query);
//  }
//});