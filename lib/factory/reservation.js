"use strict";
/**
 * reservation factory
 * @namespace factory/reservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
