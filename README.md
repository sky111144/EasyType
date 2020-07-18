### EasyType

#### Target
+ To determine the type of a variable in JavaScript

#### Install

``` bash
npm i -S @easyprogram/easytype
```

#### Usage

``` JavaScript
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


// 6. Determine whether it is an object
EasyType.isObject({}); // true
EasyType.isObject({ "key": "hello world" }); // true


// 7. Determine whether it is a function
EasyType.isFunction(function () {}); // true


// 8. Determine whether it is a set
EasyType.isSet(new Set()); // true


// 9. Determine whether it is a symbol
EasyType.isSymbol(Symbol()); // true
EasyType.isSymbol(Symbol("hello world")); // true


// 10. Determine whether it is an array
EasyType.isArray([]); // true
EasyType.isArray([1,2,3,4,5]); // true

// 11. Determine whether it is a Math
EasyType.isMath(Math); // true


// 12. Determine whether it is a regexp
EasyType.isRegExp(/hello world/g); // true


// 13. Determine whether it is a Promise
EasyType.isPromise(new Promise(function () {})); // true


// 14. Determine whether it is a JSON
EasyType.isJSON(JSON); // true
```
