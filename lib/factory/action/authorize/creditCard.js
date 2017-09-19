"use strict";
/**
 * credit card authorization factory
 * クレジットカードオーソリファクトリー
 * @namespace action.authorize.creditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../../action");
const AuthorizeActionFactory = require("../authorize");
function createAttributes(params) {
    return {
        actionStatus: params.actionStatus,
        typeOf: action_1.ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.CreditCard
        },
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
exports.createAttributes = createAttributes;
