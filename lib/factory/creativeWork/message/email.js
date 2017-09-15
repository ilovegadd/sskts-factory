"use strict";
/**
 * Eメールメッセージファクトリー
 * @namespace creativeWork.message.email
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const validator = require("validator");
const argument_1 = require("../../../error/argument");
const argumentNull_1 = require("../../../error/argumentNull");
const creativeWorkType_1 = require("../../creativeWorkType");
/**
 * create email message object
 * Eメール通知オブジェクトを作成する
 * @export
 * @function
 * @memberof creativeWork.message.email
 */
function create(params) {
    if (_.isEmpty(params.sender))
        throw new argumentNull_1.default('sender');
    if (_.isEmpty(params.toRecipient))
        throw new argumentNull_1.default('to');
    if (_.isEmpty(params.about))
        throw new argumentNull_1.default('about');
    if (_.isEmpty(params.text))
        throw new argumentNull_1.default('text');
    if (!validator.isEmail(params.sender.email))
        throw new argument_1.default('sender.email', 'sender.email must be email');
    if (!validator.isEmail(params.toRecipient.email))
        throw new argument_1.default('toRecipient.email', 'toRecipient.email must be email');
    return {
        typeOf: creativeWorkType_1.default.EmailMessage,
        identifier: params.identifier,
        name: params.identifier,
        sender: params.sender,
        toRecipient: params.toRecipient,
        about: params.about,
        text: params.text
    };
}
exports.create = create;
