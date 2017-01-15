'use strict'

/**
 * Receives multilevel array as an input and flattens it into one dimensional.
 *
 * @module array-flatten
 * @typicalname arrayFlatten
 * @example
 * var flatArray = require('array-flatten')
 */


exports.flat = flattenArray;
exports.magikflat = flattenArrayMagik;

/**
 * @name flattenArray
 * @typicalname flattenArray
 * @param {array} data  - Input array data
 * @return {array}
 *
 * @usage
 * var arrayFlatten = require('npm-array-flatten')
 * var inputArray = [1,2,3,4,[5,[6, 12,21, [1,2,3], 5],7,8,9];
 *
 * arrayFlatten.flat(inputArray, 2)  //  [1,2,3,4,5,6,12,21,1,2,3,5,7,8,9]
 */
function flattenArray(data) {
	var opt = [];

	function loopArray (arr) {
		arr.map(function(item) {
			if (typeof item === 'object') {
				loopArray(item)
			}
			else {
				opt.push(item);
			}
		})
	}

	loopArray(data);
	return opt;
}

/**
 * @name flattenArrayMagik
 * @typicalname flattenArrayMagik
 * @param {array} data  - Input array data
 * @return {array}
 *
 * @usage
 * var arrayFlatten = require('npm-array-flatten')
 * var inputArray = [1,2,3,4,[5,[6, 12,21, [1,2,3], 5],7,8,9];
 *
 * arrayFlatten.magikflat(inputArray, 2)  //  [1,2,3,4,5,6,12,21,1,2,3,5,7,8,9]
 */
function flattenArrayMagik(data) {
	return Array.prototype.toString.call(data).split(",").map(Number);
}

