"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * AlreadyInUseError
 *
 * @class AlreadyInUseError
 * @extends {SSKTSError}
 */
class AlreadyInUseError extends sskts_1.SSKTSError {
    constructor(entityName, fieldNames, message) {
        if (message === undefined || message.length === 0) {
            message = util.format('The specified \'%s\' value is already in use for: %s', entityName, fieldNames.join(', '));
        }
        super(errorCode_1.default.AlreadyInUse, message);
        this.entityName = entityName;
        this.fieldNames = fieldNames;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AlreadyInUseError.prototype);
    }
}
exports.default = AlreadyInUseError;
