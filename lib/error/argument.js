"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * ArgumentError
 *
 * @class ArgumentError
 * @extends {SSKTSError}
 */
class ArgumentError extends sskts_1.SSKTSError {
    constructor(argumentName, message) {
        if (message === undefined || message.length === 0) {
            message = `Invalid or missing argument supplied: ${argumentName}`;
        }
        super(errorCode_1.default.Argument, message);
        this.argumentName = argumentName;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentError.prototype);
    }
}
exports.default = ArgumentError;
