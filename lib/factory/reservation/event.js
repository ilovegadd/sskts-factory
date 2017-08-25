"use strict";
/**
 * event reservation factory
 * @namespace factory/reservation/event
 */
Object.defineProperty(exports, "__esModule", { value: true });
const argument_1 = require("../../error/argument");
const priceCurrency_1 = require("../priceCurrency");
const reservationStatusType_1 = require("../reservationStatusType");
function createFromCOATmpReserve(params) {
    const ticketInfos = params.offers.map((offer) => offer.ticketInfo);
    return params.reserveSeatsTemporarilyResult.listTmpReserve.map((tmpReserve, index) => {
        const selectedTicket = ticketInfos.find((ticket) => ticket.seatNum === tmpReserve.seatNum);
        if (selectedTicket === undefined) {
            throw new argument_1.default('offers', 'offers.ticketInfo not matched with tmpReserveSeatResult');
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
            typeOf: 'EventReservation',
            additionalTicketText: '',
            modifiedTime: now,
            numSeats: 1,
            price: selectedTicket.salePrice,
            priceCurrency: priceCurrency_1.default.JPY,
            reservationFor: params.individualScreeningEvent,
            reservationNumber: `${params.reserveSeatsTemporarilyResult.tmpReserveNum}-${index.toString()}`,
            reservationStatus: reservationStatusType_1.default.ReservationHold,
            reservedTicket: {
                coaTicketInfo: selectedTicket,
                dateIssued: now,
                // tslint:disable-next-line:no-suspicious-comment
                // TODO organizerに修正
                issuedBy: {
                    typeOf: params.individualScreeningEvent.superEvent.location.typeOf,
                    name: params.individualScreeningEvent.superEvent.location.name.ja
                },
                totalPrice: selectedTicket.salePrice,
                priceCurrency: priceCurrency_1.default.JPY,
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
                    name: ''
                }
            },
            underName: {
                typeOf: 'Person',
                name: ''
            }
        };
    });
}
exports.createFromCOATmpReserve = createFromCOATmpReserve;
