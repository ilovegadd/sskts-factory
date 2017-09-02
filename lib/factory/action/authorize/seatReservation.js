"use strict";
/**
 * seat reservation authorization factory
 * @namespace factory/authorization/seatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../../action");
const priceCurrency_1 = require("../../priceCurrency");
const EventReservationFactory = require("../../reservation/event");
const AuthorizeActionFactory = require("../authorize");
function createFromCOATmpReserve(params) {
    const price = params.offers.reduce((a, b) => a + b.ticketInfo.salePrice + b.ticketInfo.mvtkSalesPrice, 0);
    // tslint:disable-next-line:max-line-length no-magic-numbers
    const id = `SeatReservationAuthorizeAction-${(new Date()).toISOString().slice(0, 10)}-${params.individualScreeningEvent.superEvent.location.branchCode} -${params.reserveSeatsTemporarilyResult.tmpReserveNum}`;
    return {
        // tslint:disable-next-line:max-line-length
        id: id,
        actionStatus: params.actionStatus,
        typeOf: action_1.ActionType.AuthorizeAction,
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
                    priceCurrency: priceCurrency_1.default.JPY,
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
exports.createFromCOATmpReserve = createFromCOATmpReserve;
