"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {SSKTSError}
 */
class ArgumentNullError extends sskts_1.SSKTSError {
    constructor(argumentName, message) {
        if (message === undefined || message.length === 0) {
            message = `Missing argument: ${argumentName}`;
        }
        super(errorCode_1.default.ArgumentNull, message);
        this.argumentName = argumentName;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
exports.default = ArgumentNullError;
