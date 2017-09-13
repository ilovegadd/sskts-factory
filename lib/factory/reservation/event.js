"use strict";
/**
 * event reservation factory
 * @namespace reservation.event
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = require("../reservation");
const argument_1 = require("../../error/argument");
const priceCurrency_1 = require("../priceCurrency");
const reservationStatusType_1 = require("../reservationStatusType");
function createFromCOATmpReserve(params) {
    const ticketInfos = params.offers.map((offer) => offer.ticketInfo);
    return params.updTmpReserveSeatResult.listTmpReserve.map((tmpReserve, index) => {
        const selectedTicket = ticketInfos.find((ticket) => ticket.seatNum === tmpReserve.seatNum);
        if (selectedTicket === undefined) {
            throw new argument_1.default('offers', 'offers.ticketInfo not matched with tmpReserveSeatResult');
        }
        // create ticket token (QR code string)
        const ticketToken = [
            params.individualScreeningEvent.coaInfo.theaterCode,
            params.individualScreeningEvent.coaInfo.dateJouei,
            // tslint:disable-next-line:no-magic-numbers
            (`00000000${params.updTmpReserveSeatResult.tmpReserveNum}`).slice(-8),
            // tslint:disable-next-line:no-magic-numbers
            (`000${index + 1}`).slice(-3)
        ].join('');
        const now = new Date();
        return {
            typeOf: reservation_1.ReservationType.EventReservation,
            additionalTicketText: '',
            modifiedTime: now,
            numSeats: 1,
            price: selectedTicket.salePrice,
            priceCurrency: priceCurrency_1.default.JPY,
            reservationFor: params.individualScreeningEvent,
            reservationNumber: `${params.updTmpReserveSeatResult.tmpReserveNum}-${index.toString()}`,
            reservationStatus: reservationStatusType_1.default.ReservationHold,
            reservedTicket: {
                typeOf: 'Ticket',
                coaTicketInfo: selectedTicket,
                dateIssued: now,
                issuedBy: params.individualScreeningEvent.superEvent.organizer,
                totalPrice: selectedTicket.salePrice,
                priceCurrency: priceCurrency_1.default.JPY,
                ticketedSeat: {
                    typeOf: 'Seat',
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
exports.createFromCOATmpReserve = createFromCOATmpReserve;
