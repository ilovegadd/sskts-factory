/**
 * 座席予約承認アクションファクトリー
 */
import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import * as IndividualScreeningEventFactory from '../../event/individualScreeningEvent';
import { IOfferWithDetails as ISeatReservationOffer } from '../../offer/seatReservation';
import PriceCurrency from '../../priceCurrency';
import { ITransaction } from '../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

/**
 * authorize action result interface
 * 認可アクション結果
 * @export
 */
export interface IResult {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: PriceCurrency;
    /**
     * オファーに対して必要な消費ポイント
     */
    pecorinoAmount: number;
    /**
     * COAの仮予約パラメーター
     */
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
}

/**
 * authorize action object
 * 認可アクション対象
 * @export
 */
export interface IObject {
    typeOf: ObjectType;
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
    offers: ISeatReservationOffer[];
}

export type IPurpose = ITransaction;

/**
 * authorize action error interface
 * @export
 */
export type IError = any;

/**
 * seat reservation authorize action interface
 * 座席予約認可アクションインターフェース
 * @export
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
