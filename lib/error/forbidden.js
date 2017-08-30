"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {SSKTSError}
 */
class ForbiddenError extends sskts_1.SSKTSError {
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
