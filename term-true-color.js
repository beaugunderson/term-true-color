'use strict';

var Color = require('color');

var SELECT_FOREGROUND = 38;
var SELECT_BACKGROUND = 48;

var DIRECT_RGB = 2;

var CONTROL = '\x1b[';
var RESET = '\x1b[0m';

var DELIMITER = exports.delimiter = ';';

function setColor(selector, colorName, attributes) {
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

  var colorObject = new Color(colorName);

  return attributeString +
         CONTROL + [
           selector,
           DIRECT_RGB,
           colorObject.red(),
           colorObject.green(),
           colorObject.blue()
         ].join(DELIMITER) +
         'm';
}

exports.bg = exports.background =
  function background(string, color, attributes) {
    return setColor(SELECT_BACKGROUND, color, attributes) +
           string +
           RESET;
  };

exports.fg = exports.foreground =
  function foreground(string, color, attributes) {
    return setColor(SELECT_FOREGROUND, color, attributes) +
           string +
           RESET;
  };

exports.color = function color(string, bg, fg, attributes) {
  return setColor(SELECT_BACKGROUND, bg, attributes) +
         setColor(SELECT_FOREGROUND, fg, attributes) +
         string +
         RESET;
};
