/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */
import * as COA from '@motionpicture/coa-service';
import { ActionStatusType } from '../../action';
import * as IndividualScreeningEventFactory from '../../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../../offer';
import PriceCurrency from '../../priceCurrency';
import * as EventReservationFactory from '../../reservation/event';
import * as AuthorizeActionFactory from '../authorize';
export interface IAgent {
    typeOf: string;
    id: string;
}
export interface IRecipient {
    typeOf: string;
    id: string;
}
/**
 * authorization result interface (COA tmp reserve result)
 */
export interface IResult {
    price: number;
    /**
     * 受け入れられた供給情報
     */
    acceptedOffers: IAcceptedOffer[];
    /**
     * COAの仮予約パラメーター
     */
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
}
/**
 * authorization object
 */
export interface IObject {
    transactionId: string;
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
    offers: ISeatReservationOffer[];
}
/**
 * 供給情報インターフェース
 */
export interface IAcceptedOffer {
    /**
     * 受け入れられた予約情報
     */
    itemOffered: IReservation;
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
    /**
     * 販売者
     */
    seller: {
        typeOf: string;
        name: string;
    };
}
/**
 * 予約インターフェース
 */
export declare type IReservation = EventReservationFactory.IEventReservation<IndividualScreeningEventFactory.IEvent>;
/**
 * seat reservation authorization factory
 * @export
 * @interface
 * @memberof factory/authorization/seatReservation
 */
export interface IAction extends AuthorizeActionFactory.IAction {
    result?: IResult;
    object: IObject;
}
export declare function createFromCOATmpReserve(params: {
    id: string;
    transactionId: string;
    agent: IAgent;
    recipient: IRecipient;
    actionStatus: ActionStatusType;
    startDate: Date;
    endDate?: Date;
    offers: ISeatReservationOffer[];
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
}): IAction;
