### EasyType

#### Target
+ To determine the type of a variable in JavaScript

#### Install

```bash
npm i -S @easyprogram/easytype
```

#### Usage

```JavaScript
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

```
