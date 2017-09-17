'use strict'

module.exports = function pick (src, props) {
	var result = {}

	for (var prop in props) {
		var aliases = props[prop]
		if (typeof aliases === 'string') aliases = aliases.split(/\s*,\s*|\s+/)

		if (Array.isArray(aliases)) {
			for (var i = 0; i < aliases.length; i++) {
				var alias = aliases[i]

				if (alias in src) {
					result[prop] = src[alias]
					break
				}
			}
		}
		else {
			result[prop] = src[prop]
		}
	}

	return result
}
