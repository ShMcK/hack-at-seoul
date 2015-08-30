// Don't forget to run export AUDIODEV='hw:1,0' && export AUDIODRIVER="alsa"

var BUTTONS = {
  RECORD: 18,
  NEXT: 19,
  PREV: 20,
  OK: 21
};

var GPIO = require('node-pi-gpio');
//var Promise = require('es6-promise').Promise;
var Speakable = require('./speakable');

var speakable = new Speakable({ key: 'AIzaSyDOJE7TY2p4SwpluK8ojaoXuDG_0mUim0c' }, { threshold: '10%' });

var recordButton = new GPIO(BUTTONS.RECORD, 'in', 'both');
var isStarted = false;

Promise.all([GPIO.open(BUTTONS.RECORD, 'in')]).then(function(res) {
  var button = res[0];
  return button.on('change', function(state) {
    if ( state == 1 && !isStarted ) {
      isStarted = true;
      speakable.recordVoice();
    }
  });
})["catch"](function(err) {
  return console.log('err', err.stack);
});

speakable.on('speechResult', function(recognizedWords) {
  console.log('onSpeechResult:', recognizedWords)
  _sendWords(recognizedWords);
  isStarted = false;
});

speakable.on('speechStart', function() {
  console.log('onSpeechStart');
});

speakable.on('speechStop', function() {
  console.log('onSpeechStop');
});

speakable.on('speechReady', function() {
  console.log('onSpeechReady');
});

speakable.on('error', function(err) {
  console.log('onError:');
  console.log(err);
  isStarted = false;
});

function _sendWords (words) {
  Query.insert({ query: recognizedWords.join().replace(/,/, " ") })
}