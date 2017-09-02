"use strict";
/**
 * reservation factory
 * @namespace factory/reservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ReservationType;
(function (ReservationType) {
    ReservationType["EventReservation"] = "EventReservation";
})(ReservationType = exports.ReservationType || (exports.ReservationType = {}));
/**
 * create reservation object
 * @export
 * @function
 * @memberof factory/reservation
 */
function create(params) {
    return Object.assign({}, params, {
        typeOf: 'Reservation'
    });
}
exports.create = create;
