"use strict";
/**
 * seat reservation authorize action factory
 * @namespace action.authorize.seatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../../action");
const AuthorizeActionFactory = require("../authorize");
/**
 * create seatReservation authorize action object
 * @export
 * @function
 * @memberof action.authorize.seatReservation
 */
function create(params) {
    return {
        id: params.id,
        actionStatus: params.actionStatus,
        typeOf: action_1.ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.SeatReservation
        },
        object: params.object,
        result: params.result,
        error: params.error,
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
exports.create = create;
