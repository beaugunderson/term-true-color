'use strict';

var Color = require('color');

var SELECT_FOREGROUND = 38;
// var SELECT_BACKGROUND = 48;

var DIRECT_RGB = 2;

var CONTROL = '\x1b[';
var RESET = '\x1b[0m';

var DELIMITER = exports.delimiter = ';';

module.exports = function (string, color, attributes) {
  if (!attributes) {
    attributes = [];
  }

  var attributeString = '';

  if (attributes.indexOf('bold') !== -1) {
    attributeString += CONTROL + '1m';
  }

  if (attributes.indexOf('dim') !== -1) {
    attributeString += CONTROL + '2m';
  }

  if (attributes.indexOf('italic') !== -1) {
    attributeString += CONTROL + '3m';
  }

  if (attributes.indexOf('underline') !== -1) {
    attributeString += CONTROL + '4m';
  }

  if (attributes.indexOf('blink') !== -1) {
    attributeString += CONTROL + '5m';
  }

  if (attributes.indexOf('reverse') !== -1) {
    attributeString += CONTROL + '7m';
  }

  if (attributes.indexOf('strikethrough') !== -1) {
    attributeString += CONTROL + '9m';
  }

  color = new Color(color);

  return attributeString +
    CONTROL + [
      SELECT_FOREGROUND,
      DIRECT_RGB,
      color.red(),
      color.green(),
      color.blue()
    ].join(DELIMITER) +
    'm' +
    string +
    RESET;
};
