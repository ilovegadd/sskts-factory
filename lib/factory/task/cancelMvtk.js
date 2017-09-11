"use strict";
/**
 * ムビチケ承認解除タスクファクトリー
 * @namespace task.cancelMvtk
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.CancelMvtk }));
}
exports.createAttributes = createAttributes;
