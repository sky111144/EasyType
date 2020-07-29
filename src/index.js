class EasyType {
    constructor () {}

    version = "1.0.6"

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
        DATE: "[object Date]",
        BLOB: "[object Blob]"
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

    isSet (target) {
        return this.typeOf(target) === this.types.SET;
    }

    isWeakSet (target) {
        return this.typeOf(target) === this.types.WEAKSET;
    }

    isMap (target) {
        return this.typeOf(target) === this.types.MAP;
    }

    isWeakMap (target) {
        return this.typeOf(target) === this.types.WEAKMAP;
    }

    isSymbol (target) {
        return this.typeOf(target) === this.types.SYMBOL;
    }

    isEmptyArray (target) {
        return this.typeOf(target) === this.types.ARRAY && target.length === 0;
    }

    isArray (target) {
        return this.typeOf(target) === this.types.ARRAY;
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

    isDate (target) {
        return this.typeOf(target) === this.types.DATE;
    }

    isFalsity (target) {
        return this.types.NULL === this.typeOf(target) ||
               this.types.UNDEFINED === this.typeOf(target) ||
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
}



module.exports = new EasyType();
