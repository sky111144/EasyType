class EasyType {
    constructor () {}

    version = "1.0.32"

    types = {
        NULL: "[object Null]",
        UNDEFINED: "[object Undefined]",
        BOOLEAN: "[object Boolean]",
        NUMBER: "[object Number]",
        BIGINT: "[object BigInt]",
        STRING: "[object String]",
        ARRAY: "[object Array]",
        OBJECT: "[object Object]",
        FUNCTION: "[object Function]",
        SET: "[object Set]",
        WEAKSET: "[object WeakSet]",
        MAP: "[object Map]",
        WEAKMAP: "[object WeakMap]",
        SYMBOL: "[object Symbol]",
        MATH: "[object Math]",
        REGEXP: "[object RegExp]",
        PROMISE: "[object Promise]",
        JSON: "[object JSON]",
        ERROR: "[object Error]",
        INT8ARRAY: "[object Int8Array]",
        UINT8ARRAY: "[object Uint8Array]",
        UINT8CLAMPEDARRAY: "[object Uint8ClampedArray]",
        INT16ARRAY: "[object Int16Array]",
        UINT16ARRAY: "[object Uint16Array]",
        INT32ARRAY: "[object Int32Array]",
        UINT32ARRAY: "[object Uint32Array]",
        FLOAT32ARRAY: "[object Float32Array]",
        FLOAT64ARRAY: "[object Float64Array]",
        BIGINT64ARRAY: "[object BigInt64Array]",
        BIGUINT64ARRAY: "[object BigUint64Array]",
        ARRAYBUFFER: "[object ArrayBuffer]",
        DATAVIEW: "[object DataView]",
        DATE: "[object Date]",
        GLOBAL: "[object global]",
        WINDOW: "[object Window]"
    }

    typeOf (target) {
        return Object.prototype.toString.call(target);
    }

    isNull (target) {
        return this.typeOf(target) === this.types.NULL;
    }

    isUndefined (target) {
        return this.typeOf(target) === this.types.UNDEFINED;
    }

    isBoolean (target) {
        return this.typeOf(target) === this.types.BOOLEAN;
    }

    isNumber (target) {
        return this.typeOf(target) === this.types.NUMBER;
    }

    isNormalNumber (target) {
        return this.isNumber(target) && !this.isNaN(target) && [
            Number.POSITIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
            Number.MAX_VALUE,
            Number.MAX_SAFE_INTEGER,
            Number.EPSILON
        ].indexOf(target) === -1;
    }

    isSpecialNumber (target) {
        return this.isNumber(target) && (this.isNaN(target) || [
            Number.POSITIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
            Number.MAX_VALUE,
            Number.MAX_SAFE_INTEGER,
            Number.EPSILON
        ].indexOf(target) !== -1);
    }

    isInfinity (target) {
        return this.isPositiveInfinity(target) || this.isNegativeInfinity(target);
    }

    isPositiveInfinity (target) {
        return this.isNumber(target) && target === Number.POSITIVE_INFINITY;
    }

    isNegativeInfinity (target) {
        return this.isNumber(target) && target === Number.NEGATIVE_INFINITY;
    }

    isMaxValue (target) {
        return this.isNumber(target) && target === Number.MAX_VALUE;
    }

    isMaxSafeInteger (target) {
        return this.isNumber(target) && target === Number.MAX_SAFE_INTEGER;
    }

    isEpsilon (target) {
        return this.isNumber(target) && target === Number.EPSILON;
    }

    isNaN (target) {
        let n = Number(target);
        return n !== n;
    }

    isString (target) {
        return this.typeOf(target) === this.types.STRING;
    }

    isBigInt (target) {
        return this.typeOf(target) === this.types.BIGINT;
    }

    isObject (target) {
        return this.typeOf(target) === this.types.OBJECT;
    }

    isFunction (target) {
        return this.typeOf(target) === this.types.FUNCTION;
    }

    isNormalFunction (target) {
        return this.isFunction(target) && this.isObject(target && target.prototype);
    }

    isArrowFunction (target) {
        return this.isFunction(target) && !this.isObject(target && target.prototype);
    }

    isSet (target) {
        return this.typeOf(target) === this.types.SET;
    }

    isMap (target) {
        return this.typeOf(target) === this.types.MAP;
    }

    isWeakType (target) {
        return this.isWeakMap(target) || this.isWeakSet(target);
    }

    isWeakSet (target) {
        return this.typeOf(target) === this.types.WEAKSET;
    }

    isWeakMap (target) {
        return this.typeOf(target) === this.types.WEAKMAP;
    }

    isSymbol (target) {
        return this.typeOf(target) === this.types.SYMBOL;
    }

    isEmptyArray (target) {
        return this.isArray(target) && target.length === 0;
    }

    isArray (target) {
        return this.typeOf(target) === this.types.ARRAY;
    }

    isArrayOfBoolean (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isBoolean(item));
    }

    isArrayOfNumber (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isNumber(item));
    }

    isArrayOfString (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isString(item));
    }

    isArrayOfNull (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isNull(item));
    }

    isArrayOfUndefined (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isUndefined(item));
    }

    isArrayOfSymbol (target) {
        return this.isArray(target) && target.length > 0 && target.every((item) => this.isSymbol(item));
    }

    isMath (target) {
        return this.typeOf(target) === this.types.MATH;
    }

    isRegExp (target) {
        return this.typeOf(target) === this.types.REGEXP;
    }

    isPromise (target) {
        return this.typeOf(target) === this.types.PROMISE;
    }

    isJSON (target) {
        return this.typeOf(target) === this.types.JSON;
    }

    isError (target) {
        return this.typeOf(target) === this.types.ERROR;
    }

    isInt8Array (target) {
        return this.typeOf(target) === this.types.INT8ARRAY;
    }

    isUint8Array (target) {
        return this.typeOf(target) === this.types.UINT8ARRAY;
    }

    isUint8ClampedArray (target) {
        return this.typeOf(target) === this.types.UINT8CLAMPEDARRAY;
    }

    isInt16Array (target) {
        return this.typeOf(target) === this.types.INT16ARRAY;
    }

    isUint16Array (target) {
        return this.typeOf(target) === this.types.UINT16ARRAY;
    }

    isInt32Array (target) {
        return this.typeOf(target) === this.types.INT32ARRAY;
    }

    isUint32Array (target) {
        return this.typeOf(target) === this.types.UINT32ARRAY;
    }

    isFloat32Array (target) {
        return this.typeOf(target) === this.types.FLOAT32ARRAY;
    }

    isFloat64Array (target) {
        return this.typeOf(target) === this.types.FLOAT64ARRAY;
    }

    isBigInt64Array (target) {
        return this.typeOf(target) === this.types.BIGINT64ARRAY;
    }

    isBigUint64Array (target) {
        return this.typeOf(target) === this.types.BIGUINT64ARRAY;
    }

    isTypedArray (target) {
        return [
            this.types.INT8ARRAY,
            this.types.UINT8ARRAY,
            this.types.UINT8CLAMPEDARRAY,
            this.types.INT16ARRAY,
            this.types.UINT16ARRAY,
            this.types.INT32ARRAY,
            this.types.UINT32ARRAY,
            this.types.FLOAT32ARRAY,
            this.types.FLOAT64ARRAY,
            this.types.BIGINT64ARRAY,
            this.types.BIGUINT64ARRAY
        ].indexOf(this.typeOf(target)) !== -1;
    }

    isArrayBuffer (target) {
        return this.typeOf(target) === this.types.ARRAYBUFFER;
    }

    isDataView (target) {
        return this.typeOf(target) === this.types.DATAVIEW;
    }

    isDate (target) {
        return this.typeOf(target) === this.types.DATE;
    }

    isFalsity (target) {
        return this.isNull(target) ||
               this.isUndefined(target) ||
               target === false ||
               target === 0 ||
               target === "" ||
               this.isNaN(target)
    }

    isPrimitive (target) {
        return [
            this.types.NULL,
            this.types.UNDEFINED,
            this.types.BOOLEAN,
            this.types.NUMBER,
            this.types.STRING,
            this.types.SYMBOL,
            this.types.BIGINT
        ].indexOf(this.typeOf(target)) !== -1;
    }

    isEmptyObject (target) {
        if (this.typeOf(target) === this.types.OBJECT) {
            let count = 0;
            try {
                for (let key in target) {
                    if (target.hasOwnProperty(key)) {
                        count += 1;
                    }
                }
                return count === 0;
            } catch (e) {
                return false;
            }
        }

        return false;
    }

    isIterable (target) {
        return [
            this.types.ARRAY,
            this.types.SET,
            this.types.MAP
        ].indexOf(this.typeOf(target)) !== -1;
    }

    isGlobal (target) {
        return this.typeOf(target) === this.types.GLOBAL;
    }

    isWindow (target) {
        return this.typeOf(target) === this.types.WINDOW;
    }
}



module.exports = new EasyType();
