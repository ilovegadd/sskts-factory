"use strict";
/**
 * email notification factory
 * Eメール通知ファクトリー
 * @namespace factory/notification/email
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const validator = require("validator");
const argument_1 = require("../../error/argument");
const argumentNull_1 = require("../../error/argumentNull");
const notificationGroup_1 = require("../notificationGroup");
/**
 * create email notification object
 * Eメール通知オブジェクトを作成する
 * @export
 * @function
 * @memberof factory/notification/email
 */
function create(args) {
    if (_.isEmpty(args.data.from))
        throw new argumentNull_1.default('from');
    if (_.isEmpty(args.data.to))
        throw new argumentNull_1.default('to');
    if (_.isEmpty(args.data.subject))
        throw new argumentNull_1.default('subject');
    if (_.isEmpty(args.data.content))
        throw new argumentNull_1.default('content');
    if (!validator.isEmail(args.data.from))
        throw new argument_1.default('from', 'from should be email');
    if (!validator.isEmail(args.data.to))
        throw new argument_1.default('to', 'to should be email');
    if (args.data.send_at !== undefined) {
        if (!_.isDate(args.data.send_at))
            throw new argument_1.default('send_at', 'send_at should be Date');
    }
    // todo sendgridの仕様上72時間後までしか設定できないのでバリデーション追加するかもしれない
    return {
        id: args.id,
        group: notificationGroup_1.default.EMAIL,
        data: args.data
    };
}
exports.create = create;
