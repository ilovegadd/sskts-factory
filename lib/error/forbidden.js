"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const errorCode_1 = require("../errorCode");
/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {SSKTSError}
 */
class ForbiddenError extends error_1.SSKTSError {
    constructor(message) {
        if (message === undefined || message.length === 0) {
            message = 'Forbidden';
        }
        super(errorCode_1.default.Forbidden, message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
exports.default = ForbiddenError;
