## term-true-color

A very simple function for outputting text in true color on terminals that
support it (like iTerm 2 nightly or the terminals
[on this list](https://gist.github.com/XVilka/8346728)).

### Examples

```js
var trueColor = require('term-true-color');

console.log(trueColor('red', 'hello world'));
console.log(trueColor('#7743ce', 'hello world', ['underline']));
```
