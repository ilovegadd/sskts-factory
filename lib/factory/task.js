"use strict";
/**
 * タスクファクトリー
 * @namespace task
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const argument_1 = require("../error/argument");
const argumentNull_1 = require("../error/argumentNull");
function createAttributes(params) {
    if (_.isEmpty(params.status)) {
        throw new argumentNull_1.default('status');
    }
    if (!_.isDate(params.runsAt)) {
        throw new argument_1.default('runsAt', 'runsAt should be Date');
    }
    if (!_.isNumber(params.remainingNumberOfTries)) {
        throw new argument_1.default('remainingNumberOfTries', 'remainingNumberOfTries should be number');
    }
    if (!_.isNull(params.lastTriedAt) && !_.isDate(params.lastTriedAt)) {
        throw new argument_1.default('lastTriedAt', 'lastTriedAt should be Date or null');
    }
    if (!_.isNumber(params.numberOfTried)) {
        throw new argument_1.default('numberOfTried', 'numberOfTried should be number');
    }
    if (!_.isArray(params.executionResults)) {
        throw new argument_1.default('executionResults', 'executionResults should be array');
    }
    return {
        name: params.name,
        status: params.status,
        runsAt: params.runsAt,
        remainingNumberOfTries: params.remainingNumberOfTries,
        lastTriedAt: params.lastTriedAt,
        numberOfTried: params.numberOfTried,
        executionResults: params.executionResults,
        data: params.data
    };
}
exports.createAttributes = createAttributes;
