'use strict'

const t = require('tape')
const pick = require('./')

t('default', t => {
	let res = pick({
		a: 0,
		b: null,
		c: undefined,
		d: 1,
		e: [0, 1]
	}, {a: ['x', 'y', 'a'], b: true, c: 'd', d: ['e'], e: 'b a', f: 'd,b'})

	t.deepEqual(res, {
		a: 0,
		b: null,
		c: 1,
		d: [0, 1],
		e: null,
		f: 1
	})

	t.end()
})
