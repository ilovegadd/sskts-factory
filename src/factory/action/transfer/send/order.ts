/**
 * 注文配送アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import * as SendActionFactory from '../send';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = IOrder;

export type IResult = any;

export interface IPotentialActions {
    sendMessage?: any;
}

export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    result?: IResult;
    object: IObject;
    potentialActions: IPotentialActions;
}

export type IAction = SendActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    potentialActions: IPotentialActions;
}): IAttributes {
    return {
        ...SendActionFactory.createAttributes(params),
        potentialActions: params.potentialActions
    };
}
