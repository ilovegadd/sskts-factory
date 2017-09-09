/**
 * seat reservation authorize action factory
 * @namespace action.authorize.seatReservation
 */
import * as COA from '@motionpicture/coa-service';
import { ActionStatusType } from '../../action';
import * as IndividualScreeningEventFactory from '../../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../../offer';
import * as AuthorizeActionFactory from '../authorize';
/**
 * authorize action agent interface
 * 認可アクション主体インターフェース
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IAgent {
    typeOf: string;
    id: string;
}
/**
 * authorize action recipient interface
 * 認可アクション受取人インターフェース
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IRecipient {
    typeOf: string;
    id: string;
}
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
export declare type IError = any;
/**
 * seat reservation authorize action interface
 * 座席予約認可アクションインターフェース
 * @export
 * @interface
 * @memberof action.authorize.seatReservation
 */
export interface IAction extends AuthorizeActionFactory.IAction {
    result?: IResult;
    object: IObject;
}
/**
 * create seatReservation authorize action object
 * @export
 * @function
 * @memberof action.authorize.seatReservation
 */
export declare function create(params: {
    id: string;
    agent: IAgent;
    recipient: IRecipient;
    actionStatus: ActionStatusType;
    startDate: Date;
    endDate?: Date;
    object: IObject;
    result?: IResult;
    error?: IError;
}): IAction;
