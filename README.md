# npm-array-flatten
Npm array flatten includes flat, magikflata modules. It Receives multilevel nested array as an input and flattens it into one dimensional.

## Installation

```bash
npm i npm-array-flatten
```

## Usage
```javascript
var arrayFlatten = require('npm-array-flatten');
```

## flat(array)

Receives the nested input array and makes it into single dimensional. 
```javascript
 var inputArray = [1,2,3,4,[5,[6, 12,21, [1,2,3], 5],7,8,9];
 var position = 2;
 arrayFlatten.flat(inputArray)  
 //  [1,2,3,4,5,6,12,21,1,2,3,5,7,8,9]
```


## Demo
Demo @[array-flatten](https://tonicdev.com/npm/npm-array-flatten)
| https://tonicdev.com/npm/npm-array-flatten

## Author
Krishcdbry [krishcdbry@gmail.com]

## Licence
MIT @[krishcdbry](krishcdbry.com)
