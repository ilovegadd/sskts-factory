/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */
import * as COA from '@motionpicture/coa-service';
import * as AuthorizationFactory from '../authorization';
import PriceCurrency from '../priceCurrency';
import * as IndividualScreeningEventFactory from '../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../offer';
import * as EventReservationFactory from '../reservation/event';
/**
 * authorization result interface (COA tmp reserve result)
 */
export declare type IResult = COA.services.reserve.IUpdTmpReserveSeatResult;
/**
 * authorization object
 */
export interface IObject {
    /**
     * COAの仮予約パラメーター
     */
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    /**
     * 受け入れられた供給情報
     */
    acceptedOffers: IAcceptedOffer[];
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
export interface IAuthorization extends AuthorizationFactory.IAuthorization {
    result: IResult;
    object: IObject;
}
export declare function createFromCOATmpReserve(params: {
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    reserveSeatsTemporarilyResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[];
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
}): IAuthorization;
