"use strict";
/**
 * 取引スコープファクトリー
 * @namespace transactionScope
 */
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const _ = require("underscore");
const argument_1 = require("../error/argument");
/**
 * create transactionScope object
 * @export
 * @function
 * @memberof transactionScope
 */
function create(params) {
    if (!_.isDate(params.readyFrom))
        throw new argument_1.default('readyFrom', 'readyFrom should be Date');
    if (!_.isDate(params.readyThrough))
        throw new argument_1.default('readyThrough', 'readyThrough should be Date');
    // untilはfromより遅くなければならない
    if (params.readyThrough.getTime() <= params.readyFrom.getTime()) {
        throw new argument_1.default('readyThrough', 'readyThrough must be later than readyFrom');
    }
    return {
        readyFrom: params.readyFrom,
        readyThrough: params.readyThrough,
        client: params.client,
        theater: params.theater
    };
}
exports.create = create;
/**
 * スコープを文字列に変換する
 * @export
 * @function
 * @memberof transactionScope
 * @param {ITransactionScope} scope アクションスコープ
 */
function scope2String(scope) {
    let scopeStr = 'transactionScope';
    scopeStr += `:readyFrom:${moment(scope.readyFrom).unix()}`;
    scopeStr += `:readyThrough:${moment(scope.readyThrough).unix()}`;
    if (scope.client !== undefined) {
        scopeStr += `:client:${scope.client}`;
    }
    if (scope.theater !== undefined) {
        scopeStr += `:theater:${scope.theater}`;
    }
    return scopeStr;
}
exports.scope2String = scope2String;
