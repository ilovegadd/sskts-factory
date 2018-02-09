/**
 * credit card authorization factory
 * クレジットカードオーソリファクトリー
 * @namespace action.authorize.creditCard
 */

import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    transactionId: string;
    orderId: string;
    amount: number;
    method: GMO.utils.util.Method;
    payType: GMO.utils.util.PayType;
}

export interface IResult {
    price: number;
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
    execTranResult: GMO.services.credit.IExecTranResult;
}

/**
 * GMOオーソリインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    result?: IResult;
    object: IObject;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
}): IAttributes {
    return {
        typeOf: ActionFactory.ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.CreditCard
        },
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient
    };
}
