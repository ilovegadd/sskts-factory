"use strict";
/**
 * email notification factory
 * Eメール通知ファクトリー
 * @namespace notification.email
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
 * @memberof notification.email
 */
function create(params) {
    if (_.isEmpty(params.data.from))
        throw new argumentNull_1.default('from');
    if (_.isEmpty(params.data.to))
        throw new argumentNull_1.default('to');
    if (_.isEmpty(params.data.subject))
        throw new argumentNull_1.default('subject');
    if (_.isEmpty(params.data.content))
        throw new argumentNull_1.default('content');
    if (!validator.isEmail(params.data.from))
        throw new argument_1.default('from', 'from should be email');
    if (!validator.isEmail(params.data.to))
        throw new argument_1.default('to', 'to should be email');
    if (params.data.send_at !== undefined) {
        if (!_.isDate(params.data.send_at))
            throw new argument_1.default('send_at', 'send_at should be Date');
    }
    // tslint:disable-next-line:no-suspicious-comment
    // TODO sendgridの仕様上72時間後までしか設定できないのでバリデーション追加するかもしれない
    return {
        id: params.id,
        group: notificationGroup_1.default.EMAIL,
        data: params.data
    };
}
exports.create = create;
