"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const error_1 = require("../error");
const errorCode_1 = require("../errorCode");
/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {SSKTSError}
 */
class NotFoundError extends error_1.SSKTSError {
    constructor(entityName, message) {
        if (message === undefined || message.length === 0) {
            message = util.format('Not Found: "%s"', entityName);
        }
        super(errorCode_1.default.NotFound, message);
        this.entityName = entityName;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
exports.default = NotFoundError;
