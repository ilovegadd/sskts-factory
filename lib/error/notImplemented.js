"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {SSKTSError}
 */
class NotImplementedError extends sskts_1.SSKTSError {
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
