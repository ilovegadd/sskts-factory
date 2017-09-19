"use strict";
/**
 * 作品ファクトリー
 *
 * @namespace creativeWork
 */
Object.defineProperty(exports, "__esModule", { value: true });
function create(params) {
    return {
        identifier: params.identifier,
        name: params.name,
        description: params.description,
        copyrightHolder: params.copyrightHolder,
        copyrightYear: params.copyrightYear,
        datePublished: params.datePublished,
        license: (params.license !== undefined) ? params.license.toString() : undefined,
        thumbnailUrl: (params.thumbnailUrl !== undefined) ? params.thumbnailUrl.toString() : undefined,
        typeOf: params.typeOf
    };
}
exports.create = create;
