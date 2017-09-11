"use strict";
/**
 * transaction factory
 * 取引ファクトリー
 * @namespace transaction
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const argument_1 = require("../error/argument");
const argumentNull_1 = require("../error/argumentNull");
const transactionTasksExportationStatus_1 = require("./transactionTasksExportationStatus");
/**
 * 取引を作成する
 * @export
 * @function
 * @returns {ITransaction} 取引
 * @memberof transaction
 */
function createAttributes(params) {
    if (_.isEmpty(params.status))
        throw new argumentNull_1.default('status');
    if (!_.isDate(params.expires))
        throw new argument_1.default('expires', 'expires should be Date');
    return {
        typeOf: params.typeOf,
        status: params.status,
        agent: params.agent,
        result: params.result,
        error: params.error,
        object: params.object,
        expires: params.expires,
        startDate: params.startDate,
        endDate: params.endDate,
        tasksExportedAt: params.tasksExportedAt,
        // tslint:disable-next-line:max-line-length
        tasksExportationStatus: (params.tasksExportationStatus === undefined) ? transactionTasksExportationStatus_1.default.Unexported : params.tasksExportationStatus,
        tasks: (params.tasks === undefined) ? [] : params.tasks
    };
}
exports.createAttributes = createAttributes;
