/**
 * 返金アクションファクトリー
 */

import * as ActionFactory from '../../action';
import * as PayActionFactory from '../../action/trade/pay';
import { IOrder } from '../../order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は支払アクション
 */
export type IObject = PayActionFactory.IAction;

export type IResult = any;

export type IPurpose = IOrder;

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
    recipient: IRecipient;
}): IAttributes {
    return {
        typeOf: ActionFactory.ActionType.RefundAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        purpose: params.purpose
    };
}
