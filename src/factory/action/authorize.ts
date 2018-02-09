/**
 * authorize action factory
 * 承認アクションファクトリー
 * @namespace action.authorize
 */

import * as ActionFactory from '../action';

export type IObject = any;
export type IResult = any;

export enum AuthorizeActionPurpose {
    CreditCard = 'CreditCard',
    Mvtk = 'Mvtk',
    SeatReservation = 'SeatReservation'
}

export interface IPurpose {
    typeOf: AuthorizeActionPurpose;
}

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<TObject, TResult> {
    purpose: IPurpose;
    recipient: ActionFactory.IParticipant;
}

export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
