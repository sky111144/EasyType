class EasyType {
    constructor () {}

    version = "1.0.0"

    types = {
        NULL: "[object Null]",
        UNDEFINED: "[object Undefined]",
        BOOLEAN: "[object Boolean]",
        NUMBER: "[object Number]",
        STRING: "[object String]",
        ARRAY: "[object Array]",
        OBJECT: "[object Object]",
        FUNCTION: "[object Function]",
        SET: "[object Set]",
        WEAKSET: "[object WeakSet]",
        MAP: "[object Map]",
        SYMBOL: "[object Symbol]",
        MATH: "[object Math]",
        REGEXP: "[object RegExp]",
        PROMISE: "[object Promise]",
        JSON: "[object JSON]",
        ERROR: "[object Error]"
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

    isString (target) {
        return this.typeOf(target) === this.types.STRING;
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

    isSymbol (target) {
        return this.typeOf(target) === this.types.SYMBOL;
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
}



module.exports = new EasyType();
