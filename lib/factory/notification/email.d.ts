import * as NotificationFactory from '../notification';
/**
 * email notification data interface
 * Eメール通知データインターフェース
 * @export
 * @interface
 * @memberof factory/notification/email
 */
export interface IData {
    /**
     * 送信元メールアドレス
     */
    from: string;
    /**
     * 送信先メールアドレス
     */
    to: string;
    /**
     * 件名
     */
    subject: string;
    /**
     * 本文
     */
    content: string;
    /**
     * 送信予定日時(nullの場合はなるはやで送信)
     */
    send_at?: Date;
}
/**
 * email notification interface
 * Eメール通知インターフェース
 * @export
 * @interface
 * @memberof factory/notification/email
 */
export interface INotification extends NotificationFactory.INotification {
    data: IData;
}
/**
 * create email notification object
 * Eメール通知オブジェクトを作成する
 * @export
 * @function
 * @memberof factory/notification/email
 */
export declare function create(args: {
    id?: string;
    data: IData;
}): INotification;
