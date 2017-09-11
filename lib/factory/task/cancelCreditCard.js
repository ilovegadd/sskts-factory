"use strict";
/**
 * クレジットカード承認解除タスクファクトリー
 * @namespace task.cancelCreditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.CancelCreditCard }));
}
exports.createAttributes = createAttributes;
