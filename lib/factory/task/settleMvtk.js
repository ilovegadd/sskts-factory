"use strict";
/**
 * ムビチケ承認資産移動タスクファクトリー
 * @namespace task.settleMvtk
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.SettleMvtk }));
}
exports.createAttributes = createAttributes;
