"use strict";
/**
 * メール送信タスクファクトリー
 *
 * @namespace factory/task/sendEmailNotification
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function create(args) {
    return TaskFactory.create(Object.assign({}, args, { name: taskName_1.default.SendEmailNotification }));
}
exports.create = create;
