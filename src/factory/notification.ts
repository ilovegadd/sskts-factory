/**
 * notification factory
 * 通知ファクトリー
 * @namespace notification
 */

/**
 * notification interface
 * 通知インターフェース
 * @export
 * @interface
 * @memberof notification
 */
export interface INotification {
    id: string;
    group: string;
    data: any;
}
