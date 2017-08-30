"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const errorCode_1 = require("../errorCode");
const sskts_1 = require("./sskts");
/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {SSKTSError}
 */
class NotFoundError extends sskts_1.SSKTSError {
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
