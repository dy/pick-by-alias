'use strict'

const t = require('tape')
const pick = require('./')

t('obj', t => {
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

t('array', t => {
	t.deepEqual(pick({
		a: 0,
		b: null,
		c: undefined,
		d: 1,
		e: [0, 1]
	}, ['a', 'b', 'c', 'd']), {a: 0, b: null, c: undefined, d: 1})

	t.end()
})


t('string', t => {
	t.deepEqual(pick({
		a: 0,
		b: null,
		c: undefined,
		d: 1,
		e: [0, 1]
	}, 'a b c d'), {a: 0, b: null, c: undefined, d: 1})

	t.end()
})

t('avoid picking absent props', t => {
	t.deepEqual(pick({a: 1, b:2}, 'a b c'), {a: 1, b: 2})

	t.end()
})
