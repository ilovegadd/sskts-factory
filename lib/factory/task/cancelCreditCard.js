"use strict";
/**
 * クレジットカード承認解除タスクファクトリー
 * @namespace task.cancelCreditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function create(args) {
    return TaskFactory.create(Object.assign({}, args, { name: taskName_1.default.CancelCreditCard }));
}
exports.create = create;
