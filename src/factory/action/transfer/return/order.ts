/**
 * 注文返品アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import { IExtendId } from '../../../autoGenerated';
import { IOrder } from '../../../order';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface IObject {
    orderNumber: string;
    order: IOrder;
}

export type IResult = any;

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    startDate: Date;
    endDate?: Date;
}): IAttributes {
    return ReturnActionFactory.createAttributes(params);
}
