"use strict";
/**
 * 劇場組織ファクトリー
 * @namespace organization.movieTheater
 */
Object.defineProperty(exports, "__esModule", { value: true });
const OrganizationFactory = require("../organization");
const organizationType_1 = require("../organizationType");
function create(params) {
    const identifier = `MovieTheater-${params.branchCode}`;
    return Object.assign({}, OrganizationFactory.create({
        identifier: identifier,
        name: params.name,
        typeOf: organizationType_1.default.MovieTheater
    }), {
        branchCode: params.branchCode,
        gmoInfo: params.gmoInfo,
        parentOrganization: params.parentOrganization,
        location: params.location,
        telephone: params.telephone,
        url: params.url
    });
}
exports.create = create;
