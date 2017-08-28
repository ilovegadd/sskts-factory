/**
 * offer factory
 * @namespace factory/offer
 */

import * as COA from '@motionpicture/coa-service';

import PriceCurrency from './priceCurrency';

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * @export
 * @interface
 * @memberof factory/offer
 */
export interface IOffer {
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     */
    price: number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the price or a price component,
     * when attached to PriceSpecification and its subtypes.
     */
    priceCurrency: PriceCurrency;
}

/**
 * COA券種情報
 * @export
 * @interface
 * @memberof factory/offer
 */
export type ICOATicketInfo = COA.services.reserve.IUpdReserveTicket & {
    /**
     * チケット名
     */
    ticketName: string;
    /**
     * チケット名（カナ）
     */
    ticketNameKana: string;
    /**
     * チケット名（英）
     */
    ticketNameEng: string;
};

/**
 * seat reservation offer interface
 * @export
 * @interface
 * @memberof factory/offer
 */
export interface ISeatReservationOffer {
    /**
     * seat section
     */
    seatSection: string;
    /**
     * seat number
     */
    seatNumber: string;
    /**
     * ticket info
     */
    ticketInfo: ICOATicketInfo;
}
