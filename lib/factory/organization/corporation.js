"use strict";
/**
 * 企業ファクトリー
 * @namespace organization.corporation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const OrganizationFactory = require("../organization");
const organizationType_1 = require("../organizationType");
function create(params) {
    const organization = OrganizationFactory.create({
        identifier: params.identifier,
        name: params.name,
        legalName: params.legalName,
        typeOf: organizationType_1.default.Corporation
    });
    return Object.assign({}, organization, {
        identifier: params.identifier
    });
}
exports.create = create;
