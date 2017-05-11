import test from 'ava';
import {fg, bg, color} from './term-true-color.js';

test('fg', t => {
  var colorized = fg('test', 'red');

  t.is(colorized, '\u001b[38;2;255;0;0mtest\u001b[0m');
});

test('bg', t => {
  var colorized = bg('test', 'red');

  t.is(colorized, '\u001b[48;2;255;0;0mtest\u001b[0m');
});

test('color', t => {
  var colorized = color('test', 'red', 'red');

  t.is(colorized, '\u001b[48;2;255;0;0m\u001b[38;2;255;0;0mtest\u001b[0m');
});
