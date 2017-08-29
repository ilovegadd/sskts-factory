/**
 * notification factory
 * 通知ファクトリー
 * @namespace factory/notification
 */
/**
 * notification interface
 * 通知インターフェース
 * @export
 * @interface
 * @memberof factory/notification
 */
export interface INotification {
    id: string;
    group: string;
    data: any;
}
