import * as CreativeWorkFactory from '../../creativeWork';
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
export declare type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;
/**
 * create email message object
 * Eメール通知オブジェクトを作成する
 * @export
 * @function
 * @memberof creativeWork.message.email
 */
export declare function create(params: {
    identifier: string;
    sender: IParticipant;
    toRecipient: IParticipant;
    about: string;
    text: string;
}): ICreativeWork;
