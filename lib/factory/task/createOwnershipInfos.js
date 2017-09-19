"use strict";
/**
 * 所有権作成タスクファクトリー
 * @namespace task.createOwnershipInfos
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.CreateOwnershipInfos }));
}
exports.createAttributes = createAttributes;
