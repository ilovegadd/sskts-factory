"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SSKTSFactoryError
 *
 * @class SSKTSFactoryError
 * @extends {Error}
 */
class SSKTSFactoryError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'SSKTSFactoryError';
        this.code = code;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, SSKTSFactoryError.prototype);
    }
}
exports.default = SSKTSFactoryError;
