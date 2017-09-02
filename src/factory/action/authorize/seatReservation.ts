/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */

import * as COA from '@motionpicture/coa-service';

import { ActionStatusType, ActionType } from '../../action';
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
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
}

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
export interface IAction extends AuthorizeActionFactory.IAction {
    result: IResult;
    object: IObject;
}

export function createFromCOATmpReserve(params: {
    agent: IAgent;
    recipient: IRecipient;
    actionStatus: ActionStatusType;
    startDate: Date;
    endDate?: Date;
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    reserveSeatsTemporarilyResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[],
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent
}): IAction {
    const price = params.offers.reduce((a, b) => a + b.ticketInfo.salePrice + b.ticketInfo.mvtkSalesPrice, 0);
    // tslint:disable-next-line:max-line-length no-magic-numbers
    const id = `SeatReservationAuthorizeAction-${(new Date()).toISOString().slice(0, 10)}-${params.individualScreeningEvent.superEvent.location.branchCode} -${params.reserveSeatsTemporarilyResult.tmpReserveNum}`;

    return {
        // tslint:disable-next-line:max-line-length
        id: id,
        actionStatus: params.actionStatus,
        typeOf: ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.SeatReservation
        },
        result: {
            updTmpReserveSeatResult: params.reserveSeatsTemporarilyResult,
            price: price
        },
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
        },
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
