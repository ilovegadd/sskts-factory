"use strict";
/**
 * 組織ファクトリー
 * @namespace organization
 */
Object.defineProperty(exports, "__esModule", { value: true });
function create(params) {
    return {
        id: (params.id === undefined) ? '' : params.id,
        identifier: params.identifier,
        name: params.name,
        legalName: (params.legalName === undefined) ? { ja: '', en: '' } : params.legalName,
        typeOf: params.typeOf,
        location: params.location,
        telephone: params.telephone,
        url: (params.url !== undefined) ? params.url.toString() : undefined
    };
}
exports.create = create;
