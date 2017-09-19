/**
 * 取引スコープファクトリー
 * @namespace transactionScope
 */

import * as moment from 'moment';
import * as _ from 'underscore';

import ArgumentError from '../error/argument';

/**
 * transactionScope interface
 * @export
 * @interface
 * @memberof transactionScope
 */
export interface ITransactionScope {
    /**
     * いつから開始準備状態か
     *
     * @type {Date}
     * @memberof ITransactionScope
     */
    readyFrom: Date;
    /**
     * いつまで開始準備状態か
     *
     * @type {Date}
     * @memberof ITransactionScope
     */
    readyThrough: Date;
    /**
     * どのクライアントでやりとりされるアクションなのか
     *
     * @type {string}
     * @memberof ITransactionScope
     */
    client?: string;
    /**
     * どの劇場におけるアクションなのか
     *
     * @type {string}
     * @memberof ITransactionScope
     */
    theater?: string;
}

/**
 * create transactionScope object
 * @export
 * @function
 * @memberof transactionScope
 */
export function create(params: {
    readyFrom: Date;
    readyThrough: Date;
    client?: string;
    theater?: string;
}): ITransactionScope {
    if (!_.isDate(params.readyFrom)) throw new ArgumentError('readyFrom', 'readyFrom should be Date');
    if (!_.isDate(params.readyThrough)) throw new ArgumentError('readyThrough', 'readyThrough should be Date');

    // untilはfromより遅くなければならない
    if (params.readyThrough.getTime() <= params.readyFrom.getTime()) {
        throw new ArgumentError('readyThrough', 'readyThrough must be later than readyFrom');
    }

    return {
        readyFrom: params.readyFrom,
        readyThrough: params.readyThrough,
        client: params.client,
        theater: params.theater
    };
}

/**
 * スコープを文字列に変換する
 * @export
 * @function
 * @memberof transactionScope
 * @param {ITransactionScope} scope アクションスコープ
 */
export function scope2String(scope: ITransactionScope) {
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
