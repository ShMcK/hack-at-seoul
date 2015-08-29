var ROOT_API = 'http://api.giphy.com/v1/gifs/';

var settings = {
  API_KEY: 'dc6zaTOxFJmzC',
  size: 'original', // {string} [fixed, downsized, original]
  useRating: false,
  rating: 'pg-13', // {string} [y, g, pg, pg-13, r]
  useTheme: true,
  theme: ''
};

/* SIZES */
// downsized, _large, _still
// fixed_height, _downsampled, _small, _small_still, _still
// fixed_width, _downsampled, _small, _small_still, _still
// original, _still

function getApiCall(query, limit) {
  var apiPath = ROOT_API + // api
    'search' + // type
    '?' +
    (query ? 'q=' + getTheme() + query.replace(/ /g, "+") : '') + // query
    (settings.useRating ? 'rating=' + settings.rating : '') + // rating
    '&' +
    ('api_key=' + settings.API_KEY) + // api key
    '&limit=' + limit; // limit

  return apiPath;
}

function getTheme() {
  return settings.useTheme
    ? settings.theme + ' '
    : '';
}

function giphyFilter(gifs, size) {
  console.log(gifs);
  var gif = gifs[0].images[size];
  gif.full = gifs[0].images['original'];
  return gif;
}

Meteor.methods({
  setSettings: function (options) {
    _.keys(options).map(function (key) {
      settings[key] = options[key];
    });
  },
  insertGiphy: function (query, limit, size) {
    var limit = limit || 1;
    var size = size || 'original';
    var apiPath = getApiCall(query, limit);
    HTTP.get(apiPath, function (error, result) {
      if (error) {
        console.error('Error fetching result from Giphy');
        return error
      } else {
        // success
        RTGif.insert(giphyFilter(result.data, size));
      }
    });
  }
});