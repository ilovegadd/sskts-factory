"use strict";
/**
 * 場所ファクトリー
 * @namespace place
 */
Object.defineProperty(exports, "__esModule", { value: true });
function create(params) {
    return {
        id: params.id,
        identifier: params.identifier,
        name: params.name,
        description: params.description,
        address: params.address,
        branchCode: params.branchCode,
        containedInPlace: params.containedInPlace,
        containsPlace: params.containsPlace,
        maximumAttendeeCapacity: params.maximumAttendeeCapacity,
        openingHoursSpecification: params.openingHoursSpecification,
        smokingAllowed: params.smokingAllowed,
        telephone: params.telephone,
        url: (params.url !== undefined) ? params.url.toString() : undefined,
        typeOf: params.typeOf
    };
}
exports.create = create;
