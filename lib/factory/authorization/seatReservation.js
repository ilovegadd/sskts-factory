"use strict";
/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const authorizationGroup_1 = require("../authorizationGroup");
const priceCurrency_1 = require("../priceCurrency");
const EventReservationFactory = require("../reservation/event");
function createFromCOATmpReserve(params) {
    const price = params.offers.reduce((a, b) => a + b.ticketInfo.salePrice + b.ticketInfo.mvtkSalesPrice, 0);
    return {
        // tslint:disable-next-line:max-line-length
        id: `SeatReservationAuthorization-${params.individualScreeningEvent.superEvent.location.branchCode}-${params.reserveSeatsTemporarilyResult.tmpReserveNum}`,
        group: authorizationGroup_1.default.COA_SEAT_RESERVATION,
        price: price,
        result: params.reserveSeatsTemporarilyResult,
        object: {
            updTmpReserveSeatArgs: params.updTmpReserveSeatArgs,
            acceptedOffers: EventReservationFactory.createFromCOATmpReserve(params).map((eventReservation) => {
                return {
                    itemOffered: eventReservation,
                    price: eventReservation.price,
                    priceCurrency: priceCurrency_1.default.JPY,
                    seller: {
                        typeOf: params.individualScreeningEvent.superEvent.location.typeOf,
                        name: params.individualScreeningEvent.superEvent.location.name.ja
                    }
                };
            })
        }
    };
}
exports.createFromCOATmpReserve = createFromCOATmpReserve;
