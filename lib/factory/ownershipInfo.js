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
        identifier: params.identifier,
        ownedBy: params.ownedBy,
        acquiredFrom: params.acquiredFrom,
        ownedFrom: params.ownedFrom,
        ownedThrough: params.ownedThrough,
        typeOfGood: params.typeOfGood
    };
}
exports.create = create;
