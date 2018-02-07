/**
 * 使用アクションファクトリー
 */

import * as ActionFactory from '../../action';
import { IExtendId } from '../../autoGenerated';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<TObject, TResult> {
    result?: IResult;
    object: IObject;
}

export type IAction<TObject, TResult> = IExtendId<IAttributes<TObject, TResult>>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    startDate: Date;
    endDate?: Date;
}): IAttributes<IObject, IResult> {
    return {
        actionStatus: params.actionStatus,
        typeOf: ActionFactory.ActionType.UseAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
