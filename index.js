'use strict'


module.exports = function pick (src, props) {
	var result = {}

	if (typeof props === 'string') props = toList(props)
	if (Array.isArray(props)) {
		let res = {}
		for (var i = 0; i < props.length; i++) {
			res[props[i]] = true
		}
		props = res
	}

	for (var prop in props) {
		var aliases = props[prop]

		aliases = toList(aliases)

		if (Array.isArray(aliases)) {
			for (var i = 0; i < aliases.length; i++) {
				var alias = aliases[i]

				if (alias in src) {
					result[prop] = src[alias]
					break
				}
			}
		}
		else if (prop in src) {
			result[prop] = src[prop]
		}
	}

	return result
}

var CACHE = {}

function toList(arg) {
	if (CACHE[arg]) return CACHE[arg]
	if (typeof arg === 'string') {
		arg = CACHE[arg] = arg.split(/\s*,\s*|\s+/)
	}
	return arg
}
