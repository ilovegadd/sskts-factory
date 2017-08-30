"use strict";
/**
 * errors
 * @namespace errors
 */
Object.defineProperty(exports, "__esModule", { value: true });
const alreadyInUse_1 = require("./error/alreadyInUse");
exports.AlreadyInUse = alreadyInUse_1.default;
const argument_1 = require("./error/argument");
exports.Argument = argument_1.default;
const argumentNull_1 = require("./error/argumentNull");
exports.ArgumentNull = argumentNull_1.default;
const forbidden_1 = require("./error/forbidden");
exports.Forbidden = forbidden_1.default;
const notFound_1 = require("./error/notFound");
exports.NotFound = notFound_1.default;
const notImplemented_1 = require("./error/notImplemented");
exports.NotImplemented = notImplemented_1.default;
const serviceUnavailable_1 = require("./error/serviceUnavailable");
exports.ServiceUnavailable = serviceUnavailable_1.default;
const sskts_1 = require("./error/sskts");
exports.SSKTS = sskts_1.SSKTSError;
const unauthorized_1 = require("./error/unauthorized");
exports.Unauthorized = unauthorized_1.default;
