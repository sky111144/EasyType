### EasyType

[![NPM version](https://img.shields.io/npm/v/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype) [![NPM license](https://img.shields.io/npm/l/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)  [![NPM downloads](https://img.shields.io/npm/dm/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)

#### Target
+ To determine the type of a variable in JavaScript

#### Install

```bash
npm i -S @easyprogram/easytype
```

#### Usage

##### 1. Primitive

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is null
EasyType.isNull(null); // true

// 2. Determine whether it is undefined
EasyType.isUndefined(undefined);  // true

// 3. Determine whether it is boolean
EasyType.isBoolean(true); // true
EasyType.isBoolean(false); // true

// 4. Determine whether it is number
EasyType.isNumber(0); // true
EasyType.isNumber(NaN); // true

// 5. Determine whether it is string
EasyType.isString(""); // true
EasyType.isString("hello world"); // true

// 6. Determine whether it is Symbol
EasyType.isSymbol(Symbol()); // true
EasyType.isSymbol(Symbol("hello world")); // true

// 7. Determine whether it is Bigint
EasyType.isBigInt(BigInt(123456)); // true

// 8. Determine whether it is Primitive
EasyType.isPrimitive(undefined); // true
EasyType.isPrimitive(null); // true
EasyType.isPrimitive(true); // true
EasyType.isPrimitive(false); // true
EasyType.isPrimitive(0); // true
EasyType.isPrimitive(NaN); // true
EasyType.isPrimitive(""); // true
EasyType.isPrimitive(Symbol(123456)); // true
EasyType.isPrimitive(BigInt(1234567894561234569887)); // true
```

##### 2. Number

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Normal Number
EasyType.isNormalNumber(NaN); // false
EasyType.isNormalNumber(Infinity); // false
EasyType.isNormalNumber(-Infinity); // false
EasyType.isNormalNumber(1.7976931348623157e+308); // false
EasyType.isNormalNumber(9007199254740991); // false
EasyType.isNormalNumber(Math.pow(2, -52)); // false
EasyType.isNormalNumber(12345); // true
EasyType.isNormalNumber(-12345); // true
EasyType.isNormalNumber(0.999999); // true

// 2. Determine whether it is Special Number
EasyType.isSpecialNumber(NaN); // true
EasyType.isSpecialNumber(Infinity); // true
EasyType.isSpecialNumber(-Infinity); // true
EasyType.isSpecialNumber(1.7976931348623157e+308); // true
EasyType.isSpecialNumber(9007199254740991); // true
EasyType.isSpecialNumber(Math.pow(2, -52)); // true
EasyType.isSpecialNumber(12345); // false
EasyType.isSpecialNumber(-12345); // false
EasyType.isSpecialNumber(0.999999); // false

// 3. Determine whether it is NaN
EasyType.isNaN(NaN); // true

// 4. Determine whether it is Infinity
EasyType.isInfinity(Infinity); // true
EasyType.isInfinity(-Infinity); // true

// 5. Determine whether it is Number.POSITIVE_INFINITY
EasyType.isPositiveInfinity(Infinity); // true

// 6. Determine whether it is Number.NEGATIVE_INFINITY
EasyType.isNegativeInfinity(-Infinity); // true

// 7. Determine whether it is Number.MAX_VALUE
EasyType.isMaxValue(1.7976931348623157e+308); // true

// 8. Determine whether it is Number.MAX_SAFE_INTEGER
EasyType.isMaxSafeInteger(9007199254740991); // true

// 9. Determine whether it is Number.EPSILON
EasyType.isEpsilon(Math.pow(2, -52)); // true
```


##### 3. Function

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Function
EasyType.isFunction(() => {}); // true
EasyType.isFunction(function () {}); // true

// 2. Determine whether it is Arrow Function
EasyType.isArrowFunction(() => {});       // true
EasyType.isArrowFunction(function () {}); // false

// 3. Determine whether it is Normal Function
EasyType.isNormalFunction(() => {});       // false
EasyType.isNormalFunction(function () {}); // true
```

##### 4. Array

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Array of Number
EasyType.isArrayOfNumber([]); // false
EasyType.isArrayOfNumber(['0', '1', '2']); // false
EasyType.isArrayOfNumber(['0', true, false]); // false
EasyType.isArrayOfNumber([1, 2, 3]); // true

// 2. Determine whether it is Array of String
EasyType.isArrayOfString([]); // false
EasyType.isArrayOfString([1, 2, 3]); // false
EasyType.isArrayOfString(['0', true, false]); // false
EasyType.isArrayOfString(['0', '1', '2']); // true

// 3. Determine whether it is Array of Boolean
EasyType.isArrayOfBoolean([]); // false
EasyType.isArrayOfBoolean([1, 2, 3]); // false
EasyType.isArrayOfBoolean(['0', '1', '2']); // false
EasyType.isArrayOfBoolean([true, true, false]); // true

// 4. Determine whether it is Array of Null
EasyType.isArrayOfNull([]); // false
EasyType.isArrayOfNull([1, 2, 3]); // false
EasyType.isArrayOfNull(['0', '1', '2']); // false
EasyType.isArrayOfNull([true, true, false]); // false
EasyType.isArrayOfNull([null, null, null]); // true

// 5. Determine whether it is Array of Undefined
EasyType.isArrayOfUndefined([]); // false
EasyType.isArrayOfUndefined([1, 2, 3]); // false
EasyType.isArrayOfUndefined(['0', '1', '2']); // false
EasyType.isArrayOfUndefined([null, null, null]); // false
EasyType.isArrayOfUndefined([undefined, undefined, undefined]); // true
```

##### 5. Object

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Object
EasyType.isObject({}); // true
EasyType.isObject({ "key": "hello world" }); // true

// 2. Determine whether it is Empty Object
EasyType.isEmptyObject({}); // true
```

##### 6. Iterable

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Array
EasyType.isArray([]); // true
EasyType.isArray([1,2,3,4,5]); // true

// 2. Determine whether it is Empty Array
EasyType.isEmptyArray([]); // true

// 3. Determine whether it is Map
EasyType.isMap(new Map()); // true

// 4. Determine whether it is Set
EasyType.isSet(new Set()); // true

// 5. Determine whether it is isIterable
EasyType.isIterable([]);
EasyType.isIterable(new Set());
EasyType.isIterable(new Map());
```


##### 7. Falsity

```js
const EasyType = require("@easyprogram/easytype");

// Determine whether it is Falsity
EasyType.isFalsity(undefined); // true
EasyType.isFalsity(null); // true
EasyType.isFalsity(false); // true
EasyType.isFalsity(0); // true
EasyType.isFalsity(""); // true
EasyType.isFalsity(NaN); // true
```


##### 8. WeakType

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is WeakSet
EasyType.isWeakSet(new WeakSet()); // true

// 2. Determine whether it is WeakMap
EasyType.isWeakMap(new WeakMap()); // true

// 3. Determine whether it is WeakType
EasyType.isWeakType(new WeakMap()); // true
EasyType.isWeakType(new WeakSet()); // true
```

##### 9. Error

```js
const EasyType = require("@easyprogram/easytype");

// Determine whether it is Error
EasyType.isError(new Error()); // true
EasyType.isError(new EvalError())  // true
EasyType.isError(new RangeError()) // true
EasyType.isError(new ReferenceError()) // true
EasyType.isError(new SyntaxError()) // true
EasyType.isError(new TypeError()) // true
EasyType.isError(new URIError()) // true
```

##### 10. Binary

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is ArrayBuffer
EasyType.isArrayBuffer(new ArrayBuffer()); // true

// 2. Determine whether it is DataView
EasyType.isDataView(new DataView(new ArrayBuffer())); // true

// 3. Determine whether it is Int8Array
EasyType.isInt8Array(new Int8Array()); // true

// 4. Determine whether it is Uint8Array
EasyType.isUint8Array(new Uint8Array()); // true

// 5. Determine whether it is Uint8ClampedArray
EasyType.isUint8ClampedArray(new Uint8ClampedArray()); // true

// 6. Determine whether it is Int16Array
EasyType.isInt16Array(new Int16Array()); // true

// 7. Determine whether it is Uint16Array
EasyType.isUint16Array(new Uint16Array()); // true

// 8. Determine whether it is Int32Array
EasyType.isInt32Array(new Int32Array()); // true

// 9. Determine whether it is Uint32Array
EasyType.isUint32Array(new Uint32Array()); // true

// 10. Determine whether it is Float32Array
EasyType.isFloat32Array(new Float32Array()); // true

// 11. Determine whether it is Float64Array
EasyType.isFloat64Array(new Float64Array()); // true

// 12. Determine whether it is BigInt64Array
EasyType.isBigInt64Array(new BigInt64Array()); // true

// 13. Determine whether it is BigUint64Array
EasyType.isBigUint64Array(new BigUint64Array()); // true

// 14. Determine whether it is TypedArray
EasyType.isTypedArray(new Int8Array()); // true
EasyType.isTypedArray(new Uint8Array()); // true
EasyType.isTypedArray(new Uint8ClampedArray()); // true
EasyType.isTypedArray(new Int16Array()); // true
EasyType.isTypedArray(new Uint16Array()); // true
EasyType.isTypedArray(new Int32Array()); // true
EasyType.isTypedArray(new Uint32Array()); // true
EasyType.isTypedArray(new Float32Array()); // true
EasyType.isTypedArray(new Float64Array()); // true
EasyType.isTypedArray(new BigInt64Array()); // true
EasyType.isTypedArray(new BigUint64Array()); // true
```

##### 11. Global

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is global in Node
EasyType.isGlobal(global); // true

// 2. Determine whether it is Window in Browser
EasyType.isWindow(window); // true
```

##### 12. Other

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Math
EasyType.isMath(Math); // true

// 2. Determine whether it is RegExp
EasyType.isRegExp(/hello world/g); // true

// 3. Determine whether it is Promise
EasyType.isPromise(new Promise(function () {})); // true

// 4. Determine whether it is JSON
EasyType.isJSON(JSON); // true

// 5. Determine whether it is Date
EasyType.isDate(new Date()); // true
```
