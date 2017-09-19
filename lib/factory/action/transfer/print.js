"use strict";
/**
 * 印刷アクションファクトリー
 * @namespace action.transfer.print
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ActionFactory = require("../../action");
function createAttributes(params) {
    return {
        actionStatus: params.actionStatus,
        typeOf: ActionFactory.ActionType.PrintAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
exports.createAttributes = createAttributes;
