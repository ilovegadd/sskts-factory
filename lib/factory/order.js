"use strict";
/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * 注文ファクトリー
 * 注文は、確定した注文取引の領収証に値するものです。
 * @namespace factory/order
 */
Object.defineProperty(exports, "__esModule", { value: true });
const argument_1 = require("../error/argument");
const authorizationGroup_1 = require("./authorizationGroup");
const orderStatus_1 = require("./orderStatus");
const priceCurrency_1 = require("./priceCurrency");
const reservationStatusType_1 = require("./reservationStatusType");
/**
 * create order object from transaction parameters
 * 取引オブジェクトから注文オブジェクトを生成する
 * @export
 * @function
 * @memberof factory/order
 */
// tslint:disable-next-line:max-func-body-length
function createFromPlaceOrderTransaction(params) {
    // seatReservation exists?
    const seatReservationAuthorization = params.transaction.object.seatReservation;
    if (seatReservationAuthorization === undefined) {
        throw new argument_1.default('transaction', 'seat reservation does not exist');
    }
    if (params.transaction.object.customerContact === undefined) {
        throw new argument_1.default('transaction', 'customer contact does not exist');
    }
    const cutomerContact = params.transaction.object.customerContact;
    const orderInquiryKey = {
        theaterCode: seatReservationAuthorization.object.updTmpReserveSeatArgs.theaterCode,
        confirmationNumber: seatReservationAuthorization.result.tmpReserveNum,
        telephone: cutomerContact.telephone
    };
    // 結果作成
    const discounts = [];
    params.transaction.object.discountInfos.forEach((discountInfo) => {
        switch (discountInfo.group) {
            case authorizationGroup_1.default.MVTK:
                const discountCode = discountInfo.result.knyknrNoInfo.map((knshInfo) => knshInfo.knyknrNo).join(',');
                discounts.push({
                    name: 'ムビチケカード',
                    discount: discountInfo.price,
                    discountCode: discountCode,
                    discountCurrency: priceCurrency_1.default.JPY
                });
                break;
            default:
                break;
        }
    });
    const paymentMethods = [];
    params.transaction.object.paymentInfos.forEach((paymentInfo) => {
        switch (paymentInfo.group) {
            case authorizationGroup_1.default.GMO:
                paymentMethods.push({
                    name: 'クレジットカード',
                    paymentMethod: 'CreditCard',
                    paymentMethodId: paymentInfo.result.orderId
                });
                break;
            default:
                break;
        }
    });
    const seller = params.transaction.seller;
    const customer = Object.assign({
        id: params.transaction.agent.id,
        typeOf: params.transaction.agent.typeOf,
        name: `${cutomerContact.familyName} ${cutomerContact.givenName}`,
        url: '',
        memberOf: params.transaction.agent.memberOf
    }, params.transaction.object.customerContact);
    const acceptedOffers = seatReservationAuthorization.object.acceptedOffers.map((offer) => {
        offer.itemOffered.reservationStatus = reservationStatusType_1.default.ReservationConfirmed;
        offer.itemOffered.underName.name = customer.name;
        offer.itemOffered.reservedTicket.underName.name = customer.name;
        return offer;
    });
    const orderDate = new Date();
    // tslint:disable-next-line:no-magic-numbers
    const orderNumber = `${orderDate.toISOString().slice(0, 10)}-${orderInquiryKey.theaterCode}-${orderInquiryKey.confirmationNumber}`;
    return {
        typeOf: 'Order',
        seller: seller,
        customer: customer,
        price: seatReservationAuthorization.price - discounts.reduce((a, b) => a + b.discount, 0),
        priceCurrency: priceCurrency_1.default.JPY,
        paymentMethods: paymentMethods,
        discounts: discounts,
        confirmationNumber: orderInquiryKey.confirmationNumber,
        orderNumber: orderNumber,
        acceptedOffers: acceptedOffers,
        // tslint:disable-next-line:no-suspicious-comment
        url: '',
        orderStatus: orderStatus_1.default.OrderDelivered,
        orderDate: orderDate,
        isGift: false,
        orderInquiryKey: orderInquiryKey
    };
}
exports.createFromPlaceOrderTransaction = createFromPlaceOrderTransaction;
