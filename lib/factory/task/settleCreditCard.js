"use strict";
/**
 * クレジットカード承認資産移動タスクファクトリー
 * @namespace task.settleCreditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.SettleCreditCard }));
}
exports.createAttributes = createAttributes;
