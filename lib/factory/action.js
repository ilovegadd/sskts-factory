"use strict";
/**
 * action factory
 * アクションファクトリー
 * @namespace action
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * アクションタイプ
 * @export
 * @enum
 * @memberof action
 */
var ActionType;
(function (ActionType) {
    ActionType["AuthorizeAction"] = "AuthorizeAction";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * アクションステータス
 * @export
 * @enum
 * @memberof action
 */
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["ActiveActionStatus"] = "ActiveActionStatus";
    ActionStatusType["CompletedActionStatus"] = "CompletedActionStatus";
    ActionStatusType["FailedActionStatus"] = "FailedActionStatus";
    ActionStatusType["PotentialActionStatus"] = "PotentialActionStatus";
    ActionStatusType["CanceledActionStatus"] = "CanceledActionStatus";
})(ActionStatusType = exports.ActionStatusType || (exports.ActionStatusType = {}));
