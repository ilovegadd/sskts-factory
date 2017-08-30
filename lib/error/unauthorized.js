"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const errorCode_1 = require("../errorCode");
/**
 * UnauthorizedError
 *
 * @class UnauthorizedError
 * @extends {SSKTSError}
 */
class UnauthorizedError extends error_1.SSKTSError {
    constructor(message) {
        if (message === undefined || message.length === 0) {
            message = 'Unauthorized';
        }
        super(errorCode_1.default.Unauthorized, message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
exports.default = UnauthorizedError;
