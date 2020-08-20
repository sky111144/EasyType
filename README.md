### EasyType

[![NPM version](https://img.shields.io/npm/v/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype) [![NPM license](https://img.shields.io/npm/l/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)  [![NPM downloads](https://img.shields.io/npm/dm/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)

#### Target
+ To determine the type of a variable in JavaScript

#### Install

```bash
npm i -S @easyprogram/easytype
```

#### Usage

##### 0. Basic

```js
const EasyType = require("@easyprogram/easytype");

EasyType.type(null)                              // Null
EasyType.type(undefined)                         // Undefined
EasyType.type(false)                             // Boolean
EasyType.type(0)                                 // Number
EasyType.type(BigInt(123))                       // BigInt
EasyType.type('hello world')                     // String
EasyType.type([])                                // Array
EasyType.type({})                                // Object
EasyType.type(function () {})                    // Function
EasyType.type(new Set())                         // Set
EasyType.type(new WeakSet())                     // WeakSet
EasyType.type(new Map())                         // Map
EasyType.type(new WeakMap())                     // WeakMap
EasyType.type(Symbol(null))                      // Symbol
EasyType.type(/hello world/gi)                   // RegExp
EasyType.type(new Promise(() => {}))             // Promise
EasyType.type(Math)                              // Math
EasyType.type(JSON)                              // JSON
EasyType.type(new Error())                       // Error
EasyType.type(new Int8Array())                   // Int8Array
EasyType.type(new Uint8Array())                  // Uint8Array
EasyType.type(new Uint8ClampedArray())           // Uint8ClampedArray
EasyType.type(new Int16Array())                  // Int16Array
EasyType.type(new Uint16Array())                 // Uint16Array
EasyType.type(new Int32Array())                  // Int32Array
EasyType.type(new Uint32Array())                 // Uint32Array
EasyType.type(new Float32Array())                // Float32Array
EasyType.type(new Float64Array())                // Float64Array
EasyType.type(new BigInt64Array())               // BigInt64Array
EasyType.type(new BigUint64Array())              // BigUint64Array
EasyType.type(new ArrayBuffer())                 // ArrayBuffer
EasyType.type(new DataView(new ArrayBuffer()))   // DataView
EasyType.type(new Date())                        // Date
EasyType.type(global)                            // global
EasyType.type(window)                            // Window
```

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
EasyType.isArrayOfNumber([]);                   // false
EasyType.isArrayOfNumber(['0', '1', '2']);      // false
EasyType.isArrayOfNumber(['0', true, false]);   // false
EasyType.isArrayOfNumber([1, 2, 3]);            // true

// 2. Determine whether it is Array of String
EasyType.isArrayOfString([]);                   // false
EasyType.isArrayOfString([1, 2, 3]);            // false
EasyType.isArrayOfString(['0', true, false]);   // false
EasyType.isArrayOfString(['0', '1', '2']);      // true

// 3. Determine whether it is Array of Boolean
EasyType.isArrayOfBoolean([]);                  // false
EasyType.isArrayOfBoolean([1, 2, 3]);           // false
EasyType.isArrayOfBoolean(['0', '1', '2']);     // false
EasyType.isArrayOfBoolean([true, true, false]); // true

// 4. Determine whether it is Array of Null
EasyType.isArrayOfNull([]);                     // false
EasyType.isArrayOfNull([1, 2, 3]);              // false
EasyType.isArrayOfNull(['0', '1', '2']);        // false
EasyType.isArrayOfNull([true, true, false]);    // false
EasyType.isArrayOfNull([null, null, null]);     // true

// 5. Determine whether it is Array of Undefined
EasyType.isArrayOfUndefined([]);                // false
EasyType.isArrayOfUndefined([1, 2, 3]);         // false
EasyType.isArrayOfUndefined(['0', '1', '2']);   // false
EasyType.isArrayOfUndefined([null, null, null]);// false
EasyType.isArrayOfUndefined([undefined, undefined, undefined]); // true

// 6. Determine whether it is Array of Symbol
EasyType.isArrayOfSymbol([]);                   // false
EasyType.isArrayOfSymbol([1, 2, 3]);            // false
EasyType.isArrayOfSymbol(['0', '1', '2']);      // false
EasyType.isArrayOfSymbol([null, null, null]);   // false
EasyType.isArrayOfSymbol([Symbol(null), Symbol(undefined), Symbol(0), Symbol('hello'), Symbol(true)]); // true

// 7. Determine whether it is Array of BigInt
EasyType.isArrayOfBigInt([]);                   // false
EasyType.isArrayOfBigInt([1, 2, 3]);            // false
EasyType.isArrayOfBigInt(['0', '1', '2']);      // false
EasyType.isArrayOfBigInt([null, null, null]);   // false
EasyType.isArrayOfBigInt([BigInt(null), BigInt(undefined), BigInt(0), BigInt('hello'), BigInt(true)]); // true

// 8. Determine whether it is Array of Falsity
EasyType.isArrayOfFalsity([]);                    // false
EasyType.isArrayOfFalsity([1, 2, 3]);             // false
EasyType.isArrayOfFalsity(['0', '1', '2']);       // false
EasyType.isArrayOfFalsity([null, null, null]);    // true
EasyType.isArrayOfFalsity([undefined, undefined, undefined]); // true
EasyType.isArrayOfFalsity([false, false, false]); // true
EasyType.isArrayOfFalsity([0, 0, 0]);             // true
EasyType.isArrayOfFalsity(['', '', '']);          // true
EasyType.isArrayOfFalsity([NaN, NaN, NaN]);       // true
EasyType.isArrayOfFalsity([null, undefined, false, 0, NaN, '']); // true

// 9. Determine whether it is Array of Primitive
EasyType.isArrayOfPrimitive([]);                    // false
EasyType.isArrayOfPrimitive([1, 2, 3]);             // true
EasyType.isArrayOfPrimitive(['0', '1', '2']);       // true
EasyType.isArrayOfPrimitive([null, null, null]);    // true
EasyType.isArrayOfPrimitive([undefined]);           // true
EasyType.isArrayOfPrimitive([false, false, false]); // true
EasyType.isArrayOfPrimitive([0, 0, 0]);             // true
EasyType.isArrayOfPrimitive(['', BigInt(0), '']);   // true
EasyType.isArrayOfPrimitive([Symbol(0), NaN, NaN]); // true
EasyType.isArrayOfPrimitive([0, NaN, '']);          // true

// 10. Determine whether it is Array of X
EasyType.isArrayOf([null], EasyType.types.NULL);            // true
EasyType.isArrayOf([undefined], EasyType.types.UNDEFINED);  // true
EasyType.isArrayOf([false], EasyType.types.BOOLEAN);        // true
EasyType.isArrayOf([0], EasyType.types.NUMBER);             // true
EasyType.isArrayOf(['hello world'], EasyType.types.STRING); // true
EasyType.isArrayOf([[]], EasyType.types.ARRAY);             // true
EasyType.isArrayOf([{}], EasyType.types.OBJECT);            // true
EasyType.isArrayOf([() => {}], EasyType.types.FUNCTION);    // true
EasyType.isArrayOf([new Set()], EasyType.types.SET);        // true
EasyType.isArrayOf([new WeakSet()], EasyType.types.WEAKSET);// true
EasyType.isArrayOf([new Map()], EasyType.types.MAP);        // true
EasyType.isArrayOf([Symbol(0)], EasyType.types.SYMBOL);     // true
EasyType.isArrayOf([/hello/gi], EasyType.types.REGEXP);     // true
EasyType.isArrayOf([new Promise(() => {})], EasyType.types.PROMISE);   // true
EasyType.isArrayOf([Math], EasyType.types.MATH);            // true
EasyType.isArrayOf([JSON], EasyType.types.JSON);            // true
EasyType.isArrayOf([new Error()], EasyType.types.ERROR);    // true
EasyType.isArrayOf([new Int8Array()], EasyType.types.INT8ARRAY);           // true
EasyType.isArrayOf([new Uint8Array()], EasyType.types.UINT8ARRAY);         // true
EasyType.isArrayOf([new Uint8ClampedArray()], EasyType.types.UINT8CLAMPEDARRAY); // true
EasyType.isArrayOf([new Int16Array()], EasyType.types.INT16ARRAY);         // true
EasyType.isArrayOf([new Uint16Array()], EasyType.types.UINT16ARRAY);       // true
EasyType.isArrayOf([new Int32Array()], EasyType.types.INT32ARRAY);         // true
EasyType.isArrayOf([new Uint32Array()], EasyType.types.UINT32ARRAY);       // true
EasyType.isArrayOf([new Float32Array()], EasyType.types.FLOAT32ARRAY);     // true
EasyType.isArrayOf([new Float64Array()], EasyType.types.FLOAT64ARRAY);     // true
EasyType.isArrayOf([new BigInt64Array()], EasyType.types.BIGINT64ARRAY);   // true
EasyType.isArrayOf([new BigUint64Array()], EasyType.types.BIGUINT64ARRAY); // true
EasyType.isArrayOf([new ArrayBuffer()], EasyType.types.ARRAYBUFFER);       // true
EasyType.isArrayOf([new DataView(new ArrayBuffer())], EasyType.types.DATAVIEW); // true
EasyType.isArrayOf([new Date()], EasyType.types.DATE);                    // true
EasyType.isArrayOf([global], EasyType.types.GLOBAL);                      // true
EasyType.isArrayOf([window], EasyType.types.WINDOW);                      // true
```

##### 5. Object

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is Object
EasyType.isObject({}); // true
EasyType.isObject({ "key": "hello world" }); // true

// 2. Determine whether it is Empty Object
EasyType.isEmptyObject({}); // true

// 3. Determine whether it is Object of X
EasyType.isObjectOf({}, { key: EasyType.types.NULL });                       // false
EasyType.isObjectOf({ key: EasyType.types.NULL }, {});                       // false
EasyType.isObjectOf({}, {});                                                 // true
EasyType.isObjectOf({ key: null }, { key: EasyType.types.NULL };             // true
EasyType.isObjectOf({ key: undefined }, { key: EasyType.types.UNDEFINED });  // true
EasyType.isObjectOf({ key: false }, { key: EasyType.types.BOOLEAN });        // true
EasyType.isObjectOf({ key: 0 }, { key: EasyType.types.NUMBER });             // true
EasyType.isObjectOf({ key: 'hello world' }, { key: EasyType.types.STRING }); // true
EasyType.isObjectOf({ key: [] }, { key: EasyType.types.ARRAY });             // true
EasyType.isObjectOf({ key: {} }, { key: EasyType.types.OBJECT });            // true
EasyType.isObjectOf({ key: () => {} }, { key: EasyType.types.FUNCTION });    // true
EasyType.isObjectOf({ key: new Set() }, { key: EasyType.types.SET });        // true
EasyType.isObjectOf({ key: new WeakSet() }, { key: EasyType.types.WEAKSET });// true
EasyType.isObjectOf({ key: new Map() }, { key: EasyType.types.MAP });        // true
EasyType.isObjectOf({ key: Symbol(0) }, { key: EasyType.types.SYMBOL });     // true
EasyType.isObjectOf({ key: /hello/gi }, { key: EasyType.types.REGEXP });     // true
EasyType.isObjectOf({ key: new Promise(() => {}) }, { key: EasyType.types.PROMISE }); // true
EasyType.isObjectOf({ key: Math }, { key: EasyType.types.MATH });            // true
EasyType.isObjectOf({ key: JSON }, { key: EasyType.types.JSON });            // true
EasyType.isObjectOf({ key: new Error() }, { key: EasyType.types.ERROR });    // true
EasyType.isObjectOf({ key: new Int8Array() }, { key: EasyType.types.INT8ARRAY });           // true
EasyType.isObjectOf({ key: new Uint8Array() }, { key: EasyType.types.UINT8ARRAY });         // true
EasyType.isObjectOf({ key: new Uint8ClampedArray() }, { key: EasyType.types.UINT8CLAMPEDARRAY }); // true
EasyType.isObjectOf({ key: new Int16Array() }, { key: EasyType.types.INT16ARRAY });         // true
EasyType.isObjectOf({ key: new Uint16Array() }, { key: EasyType.types.UINT16ARRAY });       // true
EasyType.isObjectOf({ key: new Int32Array() }, { key: EasyType.types.INT32ARRAY });         // true
EasyType.isObjectOf({ key: new Uint32Array() }, { key: EasyType.types.UINT32ARRAY });       // true
EasyType.isObjectOf({ key: new Float32Array() }, { key: EasyType.types.FLOAT32ARRAY });     // true
EasyType.isObjectOf({ key: new Float64Array() }, { key: EasyType.types.FLOAT64ARRAY });     // true
EasyType.isObjectOf({ key: new BigInt64Array() }, { key: EasyType.types.BIGINT64ARRAY });   // true
EasyType.isObjectOf({ key: new BigUint64Array() }, { key: EasyType.types.BIGUINT64ARRAY }); // true
EasyType.isObjectOf({ key: new ArrayBuffer() }, { key: EasyType.types.ARRAYBUFFER });       // true
EasyType.isObjectOf({ key: new DataView(new ArrayBuffer()) }, { key: EasyType.types.DATAVIEW }); // true
EasyType.isObjectOf({ key: new Date() }, { key: EasyType.types.DATE });                     // true
EasyType.isObjectOf({ key: global }, { key: EasyType.types.GLOBAL });                       // true
EasyType.isObjectOf({ key: window }, { key: EasyType.types.WINDOW });                       // true
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
