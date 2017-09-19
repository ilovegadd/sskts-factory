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
export declare function create(params: {
    readyFrom: Date;
    readyThrough: Date;
    client?: string;
    theater?: string;
}): ITransactionScope;
/**
 * スコープを文字列に変換する
 * @export
 * @function
 * @memberof transactionScope
 * @param {ITransactionScope} scope アクションスコープ
 */
export declare function scope2String(scope: ITransactionScope): string;
