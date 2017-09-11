"use strict";
/**
 * ownershipInfo factory
 *
 * @namespace ownershipInfo
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create ownershipInfo
 * @function
 * @memberof ownershipInfo
 */
function create(params) {
    return {
        typeOf: 'OwnershipInfo',
        // tslint:disable-next-line:no-suspicious-comment
        // TODO 所有権の固有値仕様を決定
        identifier: `Reservation-${params.typeOfGood.reservationNumber}`,
        ownedBy: params.ownedBy,
        acquiredFrom: params.acquiredFrom,
        ownedFrom: params.ownedFrom,
        ownedThrough: params.ownedThrough,
        typeOfGood: params.typeOfGood
    };
}
exports.create = create;
