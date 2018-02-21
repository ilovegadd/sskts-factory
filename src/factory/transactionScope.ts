/**
 * 取引スコープファクトリー
 * @namespace transactionScope
 */

import * as moment from 'moment';

import ArgumentError from './error/argument';

/**
 * transactionScope interface
 * @export
 */
export interface ITransactionScope {
    /**
     * いつから開始準備状態か
     */
    readyFrom: Date;
    /**
     * いつまで開始準備状態か
     */
    readyThrough: Date;
    /**
     * どのクライアントでやりとりされるアクションなのか
     */
    client?: string;
    /**
     * どの劇場におけるアクションなのか
     */
    theater?: string;
}

/**
 * create transactionScope object
 * @export
 */
export function create(params: {
    readyFrom: Date;
    readyThrough: Date;
    client?: string;
    theater?: string;
}): ITransactionScope {
    if (!(params.readyFrom instanceof Date)) {
        throw new ArgumentError('readyFrom', 'readyFrom must be Date.');
    }
    if (!(params.readyThrough instanceof Date)) {
        throw new ArgumentError('readyThrough', 'readyThrough must be Date.');
    }

    // readyThroughはreadyFromより遅くなければならない
    if (params.readyThrough.getTime() <= params.readyFrom.getTime()) {
        throw new ArgumentError('readyThrough', 'readyThrough must be later than readyFrom.');
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
 * @param scope アクションスコープ
 */
export function scope2String(scope: ITransactionScope) {
    let scopeStr = 'transactionScope';
    scopeStr += `:readyFrom:${moment(scope.readyFrom).unix()}`;
    scopeStr += `:readyThrough:${moment(scope.readyThrough).unix()}`;

    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore else */
    if (scope.client !== undefined) {
        scopeStr += `:client:${scope.client}`;
    }

    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore else */
    if (scope.theater !== undefined) {
        scopeStr += `:theater:${scope.theater}`;
    }

    return scopeStr;
}
