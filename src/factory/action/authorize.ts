/**
 * authorize action factory
 * 承認アクションファクトリー
 * @namespace factory/action/authorize
 */

import * as ActionFactory from '../action';

export enum AuthorizeActionPurpose {
    CreditCard = 'CreditCard',
    Mvtk = 'Mvtk',
    SeatReservation = 'SeatReservation'
}

export interface IPurpose {
    typeOf: AuthorizeActionPurpose;
}

export interface IAction extends ActionFactory.IAction {
    purpose: IPurpose;
    agent: any;
    recipient: any;
    result?: any;
    error?: any;
    object: any;
    startDate: Date;
    endDate?: Date;
}
