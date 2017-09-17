# pick-by-alias [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

Pick object properties by a list of aliases. May not sound as a great idea for API design, but that is really useful to avoid remembering exact option names from user point.

[![npm install pick-by-alias](https://nodei.co/npm/pick-by-alias.png?mini=true)](https://npmjs.org/package/pick-by-alias/)

```js
let pick = require('pick-by-alias')

let options = pick({
  positions: [...],
  color: 'rgba(0, 100, 200, .75)',
  viewBox: null,
  extra: 123
}, {
	positions: ['positions', 'points', 'data', 'coordinates'],
	color: ['colors', 'color', 'stroke'],
	viewport: ['viewport', 'viewBox']
})

// options === {positions, color, viewport}
```

### `result = pick(source, aliases)`

Return an object consisting of the properties picked by the list of aliases. The aliases are matched in priority order, ie. the names going first are picked. Each alias can be an array or a comma/space-separated string.

## License

(c) 2017 Dima Yv. MIT License
