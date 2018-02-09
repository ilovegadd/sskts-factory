/**
 * 座席予約承認アクションファクトリー
 * @namespace action.authorize.seatReservation
 */

import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../action';
import * as IndividualScreeningEventFactory from '../../event/individualScreeningEvent';
import { IOfferWithDetails as ISeatReservationOffer } from '../../offer/seatReservation';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * authorize action result interface
 * 認可アクション結果
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IResult {
    price: number;
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
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IObject {
    transactionId: string;
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
    offers: ISeatReservationOffer[];
}

/**
 * authorize action error interface
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export type IError = any;

/**
 * seat reservation authorize action interface
 * 座席予約認可アクションインターフェース
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    result?: IResult;
    object: IObject;
}

export type IAction = ActionFactory.IAction<IAttributes>;

/**
 * create seatReservation authorize action object
 * @export
 * @function
 * @memberof action.authorize.seatReservation
 */
export function createAttributes(params: {
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    result?: IResult;
    error?: IError;
}): IAttributes {
    return {
        typeOf: ActionFactory.ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.SeatReservation
        },
        object: params.object,
        result: params.result,
        error: params.error,
        agent: params.agent,
        recipient: params.recipient
    };
}
