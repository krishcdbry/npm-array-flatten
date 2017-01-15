/* global describe, it */

var assert = require('assert')
var flatten = require('./')

describe('arrayFlatten', function () {
	describe('flat', function () {
		it('should flatten an array', function () {
			var result = flat([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10])

			assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
		})

		it('should throw on non-array', function () {
			assert.throws(function () {
				flatten('test')
			}, TypeError)
		})

		it('should work with non-array', function () {
			var result = flatten.from('test')

			assert.deepEqual(result, ['t', 'e', 's', 't'])
		})
	})
})
