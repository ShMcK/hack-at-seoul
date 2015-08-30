var ROOT_API = 'http://api.giphy.com/v1/gifs/';

var settings = {
  API_KEY: 'dc6zaTOxFJmzC',
  size: 'original', // {string} [fixed, downsized, original]
  useRating: false,
  rating: 'pg-13', // {string} [y, g, pg, pg-13, r]
  useTheme: false,
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
  var gif = gifs.data[0].images[size];
  gif.date_created = Date.now();
  return gif;
}

Meteor.methods({
  setSettings: function (options) {
    _.keys(options).map(function (key) {
      settings[key] = options[key];
    });
  },
  insertGiphy: function (query, limit, size) {
    limit = limit || 1;
    size = size || 'original';
    var apiPath = getApiCall(query, limit);
    HTTP.get(apiPath, function (error, result) {
      if (error) {
        console.error('Error fetching result from Giphy');
        return error;
      } else {
        // success
        RTGif.insert(giphyFilter(result.data, size));
      }
    });
  }
});