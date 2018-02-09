/**
 * 注文返品アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は注文
 */
export type IObject = IOrder;

export type IResult = any;

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    result?: IResult;
    object: IObject;
}

export type IAction = ReturnActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
}): IAttributes {
    return ReturnActionFactory.createAttributes(params);
}
