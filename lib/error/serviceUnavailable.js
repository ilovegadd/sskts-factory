"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * ServiceUnavailableError
 *
 * @class ServiceUnavailableError
 * @extends {SSKTSError}
 */
class ServiceUnavailableError extends sskts_1.SSKTSError {
    constructor(message) {
        if (message === undefined || message.length === 0) {
            message = 'service unavailable temporarily';
        }
        super(errorCode_1.default.ServiceUnavailable, message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
exports.default = ServiceUnavailableError;
