"use strict";
/**
 * クレジットカード承認資産移動タスクファクトリー
 * @namespace factory/task/settleCreditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function create(args) {
    return TaskFactory.create(Object.assign({}, args, { name: taskName_1.default.SettleCreditCard }));
}
exports.create = create;
