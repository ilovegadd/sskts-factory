/**
 * Eメールメッセージファクトリー
 * @namespace creativeWork.message.email
 */

import * as _ from 'underscore';
import * as validator from 'validator';

import ArgumentError from '../../../error/argument';
import ArgumentNullError from '../../../error/argumentNull';

import * as CreativeWorkFactory from '../../creativeWork';
import CreativeWorkType from '../../creativeWorkType';

export interface IParticipant {
    typeOf?: string;
    name: string;
    email: string;
}

export interface IAttributes {
    sender: IParticipant;
    toRecipient: IParticipant;
    about: string;
    text: string;
}

/**
 * email message creativeWork interface
 * @export
 * @interface
 * @memberof creativeWork.message.email
 */
export type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;

/**
 * create email message object
 * Eメール通知オブジェクトを作成する
 * @export
 * @function
 * @memberof creativeWork.message.email
 */
export function create(params: {
    identifier: string;
    sender: IParticipant;
    toRecipient: IParticipant;
    about: string;
    text: string;
}): ICreativeWork {
    if (_.isEmpty(params.sender)) throw new ArgumentNullError('sender');
    if (_.isEmpty(params.toRecipient)) throw new ArgumentNullError('to');
    if (_.isEmpty(params.about)) throw new ArgumentNullError('about');
    if (_.isEmpty(params.text)) throw new ArgumentNullError('text');

    if (!validator.isEmail(params.sender.email)) throw new ArgumentError('sender.email', 'sender.email must be email');
    if (!validator.isEmail(params.toRecipient.email)) throw new ArgumentError('toRecipient.email', 'toRecipient.email must be email');

    return {
        typeOf: CreativeWorkType.EmailMessage,
        identifier: params.identifier,
        name: params.identifier,
        sender: params.sender,
        toRecipient: params.toRecipient,
        about: params.about,
        text: params.text
    };
}
