"use strict";
/**
 * action factory
 * アクションファクトリー
 * @namespace action
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ActionType;
(function (ActionType) {
    ActionType["AuthorizeAction"] = "AuthorizeAction";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["ActiveActionStatus"] = "ActiveActionStatus";
    ActionStatusType["CompletedActionStatus"] = "CompletedActionStatus";
    ActionStatusType["FailedActionStatus"] = "FailedActionStatus";
    ActionStatusType["PotentialActionStatus"] = "PotentialActionStatus";
    ActionStatusType["CanceledActionStatus"] = "CanceledActionStatus";
})(ActionStatusType = exports.ActionStatusType || (exports.ActionStatusType = {}));
