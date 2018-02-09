/**
 * ムビチケ使用アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import { ISeatInfoSyncIn } from '../../authorize/mvtk';
import * as UseActionFactory from '../use';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface IObject {
    typeOf: 'Mvtk';
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export type IResult = any;

export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    result?: IResult;
    object: IObject;
}

export type IAction = UseActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
}): IAttributes {
    return UseActionFactory.createAttributes(params);
}
