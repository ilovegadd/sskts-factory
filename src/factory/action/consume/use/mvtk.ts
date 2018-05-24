import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import { ISeatInfoSyncIn } from '../../authorize/discount/mvtk';
import * as UseActionFactory from '../use';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export enum ObjectType {
    Mvtk = 'Mvtk'
}
export interface IObject {
    typeOf: ObjectType;
    seatInfoSyncIn: ISeatInfoSyncIn;
}
export type IResult = any;
export type IPurpose = IOrder;
export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
}
/**
 * ムビチケ使用アクションインターフェース
 */
export type IAction = UseActionFactory.IAction<IAttributes>;
