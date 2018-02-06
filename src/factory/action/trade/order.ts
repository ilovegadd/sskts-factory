/**
 * 注文アクションファクトリー
 */

import * as ActionFactory from '../../action';
import { IExtendId } from '../../autoGenerated';
import { IOrder } from '../../order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface IObject {
    /**
     * 注文番号
     */
    orderNumber: string;
    /**
     * 注文取引ID
     */
    transactionId: string;
}

export interface IResult {
    order: IOrder;
}

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    startDate: Date;
    endDate?: Date;
}): IAttributes {
    return {
        actionStatus: params.actionStatus,
        typeOf: ActionFactory.ActionType.OrderAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
