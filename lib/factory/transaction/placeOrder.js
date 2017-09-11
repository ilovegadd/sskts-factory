"use strict";
/**
 * placeOrder transaction factory
 * 注文取引ファクトリー
 * @namespace transaction.placeOrder
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionFactory = require("../transaction");
const transactionType_1 = require("../transactionType");
/**
 * create placeOrderTransaction object.
 * 注文取引オブジェクトを生成する。
 * @export
 * @function
 * @memberof transaction.placeOrder
 */
function createAttributes(params) {
    return Object.assign({}, TransactionFactory.createAttributes({
        typeOf: transactionType_1.default.PlaceOrder,
        status: params.status,
        agent: params.agent,
        result: params.result,
        error: params.error,
        object: params.object,
        expires: params.expires,
        startDate: params.startDate,
        endDate: params.endDate,
        tasksExportedAt: params.tasksExportedAt,
        tasksExportationStatus: params.tasksExportationStatus,
        tasks: params.tasks
    }), {
        seller: params.seller,
        object: params.object
    });
}
exports.createAttributes = createAttributes;
