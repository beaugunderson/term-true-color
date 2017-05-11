## term-true-color

A function for outputting text in true color on terminals that support it (like
iTerm 2 or the other terminals
[on this list](https://gist.github.com/XVilka/8346728)).

### Examples

```js
var fg = require('term-true-color').fg;

console.log(fg('hello world', 'red'));
console.log(fg('hello world', '#7743ce', ['underline']));
```
