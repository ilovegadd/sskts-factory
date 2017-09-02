/**
 * event reservation factory
 * @namespace factory/reservation/event
 */

import * as COA from '@motionpicture/coa-service';

import { IEvent } from '../event';
import { IReservation, ReservationType } from '../reservation';

import ArgumentError from '../../error/argument';

import * as IndividualScreeningEventFactory from '../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../offer';
import PriceCurrency from '../priceCurrency';
import ReservationStatusType from '../reservationStatusType';

export interface IEventReservation<T extends IEvent> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}

export function createFromCOATmpReserve(params: {
    reserveSeatsTemporarilyResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[],
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent
}): IEventReservation<IndividualScreeningEventFactory.IEvent>[] {
    const ticketInfos = params.offers.map((offer) => offer.ticketInfo);

    return params.reserveSeatsTemporarilyResult.listTmpReserve.map((tmpReserve, index) => {
        const selectedTicket = ticketInfos.find((ticket) => ticket.seatNum === tmpReserve.seatNum);
        if (selectedTicket === undefined) {
            throw new ArgumentError('offers', 'offers.ticketInfo not matched with tmpReserveSeatResult');
        }

        // create ticket token (QR code string)
        const ticketToken = [
            params.individualScreeningEvent.coaInfo.theaterCode,
            params.individualScreeningEvent.coaInfo.dateJouei,
            // tslint:disable-next-line:no-magic-numbers
            (`00000000${params.reserveSeatsTemporarilyResult.tmpReserveNum}`).slice(-8),
            // tslint:disable-next-line:no-magic-numbers
            (`000${index + 1}`).slice(-3)
        ].join('');

        const now = new Date();

        return {
            typeOf: ReservationType.EventReservation,
            additionalTicketText: '',
            modifiedTime: now,
            numSeats: 1,
            price: selectedTicket.salePrice,
            priceCurrency: PriceCurrency.JPY,
            reservationFor: params.individualScreeningEvent,
            reservationNumber: `${params.reserveSeatsTemporarilyResult.tmpReserveNum}-${index.toString()}`,
            reservationStatus: ReservationStatusType.ReservationHold,
            reservedTicket: {
                coaTicketInfo: selectedTicket,
                dateIssued: now,
                issuedBy: params.individualScreeningEvent.superEvent.organizer,
                totalPrice: selectedTicket.salePrice,
                priceCurrency: PriceCurrency.JPY,
                ticketedSeat: {
                    seatingType: '',
                    seatNumber: tmpReserve.seatNum,
                    seatRow: '',
                    seatSection: tmpReserve.seatSection
                },
                ticketNumber: ticketToken,
                ticketToken: ticketToken,
                underName: {
                    typeOf: 'Person',
                    name: {
                        ja: '',
                        en: ''
                    }
                }
            },
            underName: {
                typeOf: 'Person',
                name: {
                    ja: '',
                    en: ''
                }
            }
        };
    });
}
