# hljs-SunScript
[highlight.js](https://github.com/highlightjs/highlight.js) language definition for SunScript

## Usage
```javascript
const hljs = require('highlight.js');
const ss = require('@sup39/hljs-SunScript');

// register language
hljs.registerLanguage('SunScript', ss);
// register alias as needed
hljs.registerAliases(['sunscript', 'ss'], {languageName: 'SunScript'});
```

## CSS
The following classes will be used for highlight:
- `.hljs-comment`: comments (`//`, `/* */`)
- `.hljs-keyword`: keywords (e.g. `var`, `if`)
- `.hljs-bracket`: `{`, `}`, and `(`, `)` after `if`, `for`, `while`
- `.hljs-number`: int, float, hex, address (e.g. `39`, `12.07`, `0xEC0`, `$80426428`)
- `.hljs-string`: single-quoted and double-quoted strings (e.g. `'SMS'`, `"サンシャイン"`)
- `.hljs-logical`: `&&` and `||`

The following is an sample css for dark theme:
```css
.hljs-comment {
  color: #7d6;
}
.hljs-keyword, .hljs-bracket {
  color: #ffa;
  font-weight: bold;
}
.hljs-number, .hljs-string {
  color: #ffb7e7;
}
.hljs-logical {
  color: #aff;
}
```
