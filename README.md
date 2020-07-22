### EasyType

[![NPM version](https://img.shields.io/npm/v/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype) [![NPM license](https://img.shields.io/npm/l/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)  [![NPM downloads](https://img.shields.io/npm/dm/@easyprogram/easytype.svg)](https://www.npmjs.com/package/@easyprogram/easytype)

#### Target
+ To determine the type of a variable in JavaScript

#### Install

```bash
npm i -S @easyprogram/easytype
```

#### Usage

```js
const EasyType = require("@easyprogram/easytype");

// 1. Determine whether it is a null
EasyType.isNull(null); // true


// 2. Determine whether it is an undefined
EasyType.isUndefined(undefined);  // true


// 3. Determine whether it is a boolean
EasyType.isBoolean(true); // true
EasyType.isBoolean(false); // true


// 4. Determine whether it is a number
EasyType.isNumber(0); // true
EasyType.isNumber(NaN); // true


// 5. Determine whether it is a string
EasyType.isString(""); // true
EasyType.isString("hello world"); // true


// 6. Determine whether it is an Object
EasyType.isObject({}); // true
EasyType.isObject({ "key": "hello world" }); // true


// 7. Determine whether it is a Function
EasyType.isFunction(function () {}); // true


// 8. Determine whether it is a Set
EasyType.isSet(new Set()); // true

// 9. Determine whether it is a WeakSet
EasyType.isSet(new WeakSet()); // true


// 10. Determine whether it is a Symbol
EasyType.isSymbol(Symbol()); // true
EasyType.isSymbol(Symbol("hello world")); // true


// 11. Determine whether it is an Array
EasyType.isArray([]); // true
EasyType.isArray([1,2,3,4,5]); // true


// 12. Determine whether it is a Map
EasyType.isMap(new Map()); // true


// 13. Determine whether it is a Math
EasyType.isMath(Math); // true


// 14. Determine whether it is a RegExp
EasyType.isRegExp(/hello world/g); // true


// 15. Determine whether it is a Promise
EasyType.isPromise(new Promise(function () {})); // true


// 16. Determine whether it is a JSON
EasyType.isJSON(JSON); // true

// 17. Determine whether it is a Error
EasyType.isError(new Error()); // true
EasyType.isError(new EvalError())  // true
EasyType.isError(new RangeError()) // true
EasyType.isError(new ReferenceError()) // true
EasyType.isError(new SyntaxError()) // true
EasyType.isError(new TypeError()) // true
EasyType.isError(new URIError()) // true

// 18. Determine whether it is a Int8Array
EasyType.isInt8Array(new Int8Array()); // true

// 19. Determine whether it is a Uint8Array
EasyType.isUint8Array(new Uint8Array()); // true

// 20. Determine whether it is a Uint8ClampedArray
EasyType.isUint8ClampedArray(new Uint8ClampedArray()); // true

// 21. Determine whether it is a Int16Array
EasyType.isInt16Array(new Int16Array()); // true

// 22. Determine whether it is a Uint16Array
EasyType.isUint16Array(new Uint16Array()); // true

// 23. Determine whether it is a Int32Array
EasyType.isInt32Array(new Int32Array()); // true

// 24. Determine whether it is a Uint32Array
EasyType.isUint32Array(new Uint32Array()); // true

// 25. Determine whether it is a Float32Array
EasyType.isFloat32Array(new Float32Array()); // true

// 26. Determine whether it is a Float64Array
EasyType.isFloat64Array(new Float64Array()); // true

// 27. Determine whether it is a TypedArray
EasyType.isTypedArray(new Int8Array()); // true
EasyType.isTypedArray(new Uint8Array()); // true
EasyType.isTypedArray(new Uint8ClampedArray()); // true
EasyType.isTypedArray(new Int16Array()); // true
EasyType.isTypedArray(new Uint16Array()); // true
EasyType.isTypedArray(new Int32Array()); // true
EasyType.isTypedArray(new Uint32Array()); // true
EasyType.isTypedArray(new Float32Array()); // true
EasyType.isTypedArray(new Float64Array()); // true

// 28. Determine whether it is a Date
EasyType.isDate(new Date()); // true

```
