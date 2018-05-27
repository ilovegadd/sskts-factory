/**
 * 組織ファクトリー
 */
import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import * as URLFactory from './url';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}

export interface IPecorinoPaymentAccepted {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.Pecorino;
    /**
     * 口座番号
     */
    accountNumber: string;
}

/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted<T extends PaymentMethodType> =
    T extends PaymentMethodType.Pecorino ? IPecorinoPaymentAccepted :
    never;

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier?: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
    /**
     * GMO情報
     */
    gmoInfo?: IGMOInfo;
    image?: string;
    paymentAccepted?: IPaymentAccepted<PaymentMethodType>[];
}
