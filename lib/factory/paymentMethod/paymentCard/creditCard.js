"use strict";
/**
 * credit card factory
 * @namespace factory/paymentMethod/paymentCard/creditCard
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GMOカード検索結果から有効性確認済みカードを作成する
 * @export
 * @param {GMO.services.card.ISearchCardResult} searchCardResult GMOカード検索結果
 * @returns {ICheckedCard} 有効性確認済みカード
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
function createCheckedCardFromGMOSearchCardResult(searchCardResult) {
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
exports.createCheckedCardFromGMOSearchCardResult = createCheckedCardFromGMOSearchCardResult;
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
function createUncheckedCardRaw(params) {
    return params;
}
exports.createUncheckedCardRaw = createUncheckedCardRaw;
/**
 * トークン化有効性確認前GMOカードを作成する
 * @export
 * @param {string} params.token
 * @returns {IUncheckedCardTokenized} トークン化有効性確認前GMOカード
 * @memberof factory/paymentMethod/paymentCard/creditCard
 */
function createUncheckedCardTokenized(params) {
    return params;
}
exports.createUncheckedCardTokenized = createUncheckedCardTokenized;
