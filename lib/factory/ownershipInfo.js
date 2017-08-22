"use strict";
/**
 * ownershipInfo factory
 *
 * @namespace factory/ownershipInfo
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create ownershipInfo
 * @function
 * @memberof factory/ownershipInfo
 */
function create(args) {
    return {
        typeOf: 'OwnershipInfo',
        // tslint:disable-next-line:no-suspicious-comment
        // TODO 所有権の固有値仕様を決定
        identifier: `Reservation-${args.typeOfGood.reservationNumber}`,
        ownedBy: args.ownedBy,
        acquiredFrom: args.acquiredFrom,
        ownedFrom: args.ownedFrom,
        ownedThrough: args.ownedThrough,
        typeOfGood: args.typeOfGood
    };
}
exports.create = create;
