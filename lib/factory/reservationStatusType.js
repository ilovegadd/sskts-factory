"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumerated status values for Reservation.
 * @enum {ReservationStatusType}
 */
var ReservationStatusType;
(function (ReservationStatusType) {
    /**
     * The status for a previously confirmed reservation that is now cancelled.
     * @memberof {ReservationStatusType}
     */
    ReservationStatusType["ReservationCancelled"] = "ReservationCancelled";
    /**
     * The status of a confirmed reservation.
     * @memberof {ReservationStatusType}
     */
    ReservationStatusType["ReservationConfirmed"] = "ReservationConfirmed";
    /**
     * The status of a reservation on hold pending an update like credit card number or flight changes.
     * @memberof {ReservationStatusType}
     */
    ReservationStatusType["ReservationHold"] = "ReservationHold";
    /**
     * The status of a reservation when a request has been sent, but not confirmed.
     * @memberof {ReservationStatusType}
     */
    ReservationStatusType["ReservationPending"] = "ReservationPending";
})(ReservationStatusType || (ReservationStatusType = {}));
exports.default = ReservationStatusType;
