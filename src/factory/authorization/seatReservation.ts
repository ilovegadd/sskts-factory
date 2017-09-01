/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */

import * as COA from '@motionpicture/coa-service';

import * as AuthorizationFactory from '../authorization';
import AuthorizationGroup from '../authorizationGroup';
import PriceCurrency from '../priceCurrency';

import * as IndividualScreeningEventFactory from '../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../offer';
import * as EventReservationFactory from '../reservation/event';

/**
 * authorization result interface (COA tmp reserve result)
 */
export type IResult = COA.services.reserve.IUpdTmpReserveSeatResult;

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
export type IReservation = EventReservationFactory.IEventReservation<IndividualScreeningEventFactory.IEvent>;

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

export function createFromCOATmpReserve(params: {
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    reserveSeatsTemporarilyResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[],
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent
}): IAuthorization {
    const price = params.offers.reduce((a, b) => a + b.ticketInfo.salePrice + b.ticketInfo.mvtkSalesPrice, 0);

    return {
        // tslint:disable-next-line:max-line-length
        id: `SeatReservationAuthorization-${params.individualScreeningEvent.superEvent.location.branchCode}-${params.reserveSeatsTemporarilyResult.tmpReserveNum}`,
        group: AuthorizationGroup.COA_SEAT_RESERVATION,
        price: price,
        result: params.reserveSeatsTemporarilyResult,
        object: {
            updTmpReserveSeatArgs: params.updTmpReserveSeatArgs,
            acceptedOffers: EventReservationFactory.createFromCOATmpReserve(params).map((eventReservation) => {
                return {
                    itemOffered: eventReservation,
                    price: eventReservation.price,
                    priceCurrency: PriceCurrency.JPY,
                    seller: {
                        typeOf: params.individualScreeningEvent.superEvent.location.typeOf,
                        name: params.individualScreeningEvent.superEvent.location.name.ja
                    }
                };
            })
        }
    };
}
