"use strict";
/**
 * メール送信タスクファクトリー
 * @namespace task.sendEmailNotification
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.SendEmailNotification }));
}
exports.createAttributes = createAttributes;
