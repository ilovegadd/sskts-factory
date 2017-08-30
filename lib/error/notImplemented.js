"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const errorCode_1 = require("../errorCode");
/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {SSKTSError}
 */
class NotImplementedError extends error_1.SSKTSError {
    constructor(message) {
        if (message === undefined || message.length === 0) {
            message = 'Method is not yet implemented';
        }
        super(errorCode_1.default.NotImplemented, message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
exports.default = NotImplementedError;
