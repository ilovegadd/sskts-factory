"use strict";
/**
 * クレジットカード承認解除タスクファクトリー
 * @namespace factory/task/cancelCreditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function create(args) {
    // todo validation
    return TaskFactory.create(Object.assign({}, args, { name: taskName_1.default.CancelCreditCard }));
}
exports.create = create;
