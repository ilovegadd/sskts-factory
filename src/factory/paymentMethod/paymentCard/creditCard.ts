/**
 * credit card factory
 * @namespace factory/paymentMethod/paymentCard/creditCard
 */

import * as GMO from '@motionpicture/gmo-service';

import { IPaymentCard } from '../paymentCard';

/**
 * 有効性確認済みカード
 * @export
 * @interface ICheckedCard
 * @extends {CardFactory.ICard}
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export interface ICheckedCard extends IPaymentCard {
    /**
     * カード登録連番
     * @type {string}
     * @memberof ICheckedCard
     */
    cardSeq: string;
    /**
     * カード会社略称
     * @type {string}
     * @memberof ICheckedCard
     */
    cardName: string;
    /**
     * カード番号
     * @type {string}
     * @memberof ICheckedCard
     */
    cardNo: string;
    /**
     * 有効期限
     * @type {string}
     * @memberof ICheckedCard
     */
    expire: string;
    /**
     * 名義人
     * @type {string}
     * @memberof ICheckedCard
     */
    holderName: string;
    /**
     * delete flag
     * @type {string}
     * @memberof ICheckedCard
     */
    deleteFlag: string;
}

/**
 * 生の有効性確認前GMOカードインターフェース
 * @interface IUncheckedCardRaw
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export interface IUncheckedCardRaw {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}

/**
 * トークン化有効性確認前GMOカードインターフェース
 * @interface IUncheckedCardTokenized
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export interface IUncheckedCardTokenized {
    token: string;
}

/**
 * GMOカード検索結果から有効性確認済みカードを作成する
 * @export
 * @param {GMO.services.card.ISearchCardResult} searchCardResult GMOカード検索結果
 * @returns {ICheckedCard} 有効性確認済みカード
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export function createCheckedCardFromGMOSearchCardResult(
    searchCardResult: GMO.services.card.ISearchCardResult
): ICheckedCard {
    return {
        typeOf: 'CreditCard',
        identifier: `CreditCard-${searchCardResult.cardSeq}`,
        cardSeq: searchCardResult.cardSeq,
        cardName: searchCardResult.cardName,
        cardNo: searchCardResult.cardNo,
        expire: searchCardResult.expire,
        holderName: searchCardResult.holderName,
        deleteFlag: searchCardResult.deleteFlag
    };
}

/**
 * 生の有効性確認前GMOカードを作成する
 * @export
 * @param {string} params.cardNo カード番号
 * @param {string} [params.cardPass] カードパスワード
 * @param {string} params.expire 有効期限 名義人
 * @param {string} params.holderName
 * @returns {IUncheckedCardRaw} 生の有効性確認前GMOカード
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export function createUncheckedCardRaw(params: {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}): IUncheckedCardRaw {
    return params;
}

/**
 * トークン化有効性確認前GMOカードを作成する
 * @export
 * @param {string} params.token
 * @returns {IUncheckedCardTokenized} トークン化有効性確認前GMOカード
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
export function createUncheckedCardTokenized(params: {
    token: string;
}): IUncheckedCardTokenized {
    return params;
}
