"use strict";
/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * 注文ファクトリー
 * 注文は、確定した注文取引の領収証に値するものです。
 * @namespace order
 */
Object.defineProperty(exports, "__esModule", { value: true });
const argument_1 = require("../error/argument");
const authorize_1 = require("./action/authorize");
const orderStatus_1 = require("./orderStatus");
const priceCurrency_1 = require("./priceCurrency");
const EventReservationFactory = require("./reservation/event");
const reservationStatusType_1 = require("./reservationStatusType");
/**
 * create order object from transaction parameters
 * 取引オブジェクトから注文オブジェクトを生成する
 * @export
 * @function
 * @memberof order
 */
// tslint:disable-next-line:max-func-body-length
function createFromPlaceOrderTransaction(params) {
    // seatReservation exists?
    const seatReservationAuthorizeAction = params.transaction.object.authorizeActions.find((action) => {
        return action.purpose.typeOf === authorize_1.AuthorizeActionPurpose.SeatReservation;
    });
    if (seatReservationAuthorizeAction === undefined) {
        throw new argument_1.default('transaction', 'seat reservation does not exist');
    }
    if (seatReservationAuthorizeAction.result === undefined) {
        throw new argument_1.default('transaction', 'seat reservation result does not exist');
    }
    if (params.transaction.object.customerContact === undefined) {
        throw new argument_1.default('transaction', 'customer contact does not exist');
    }
    const cutomerContact = params.transaction.object.customerContact;
    const orderInquiryKey = {
        theaterCode: seatReservationAuthorizeAction.result.updTmpReserveSeatArgs.theaterCode,
        confirmationNumber: seatReservationAuthorizeAction.result.updTmpReserveSeatResult.tmpReserveNum,
        telephone: cutomerContact.telephone
    };
    // 結果作成
    const discounts = [];
    params.transaction.object.authorizeActions
        .filter((action) => action.purpose.typeOf === authorize_1.AuthorizeActionPurpose.Mvtk)
        .forEach((mvtkAuthorizeAction) => {
        const discountCode = mvtkAuthorizeAction.object.seatInfoSyncIn.knyknrNoInfo.map((knshInfo) => knshInfo.knyknrNo).join(',');
        discounts.push({
            name: 'ムビチケカード',
            discount: mvtkAuthorizeAction.result.price,
            discountCode: discountCode,
            discountCurrency: priceCurrency_1.default.JPY
        });
    });
    const paymentMethods = [];
    params.transaction.object.authorizeActions
        .filter((action) => action.purpose.typeOf === authorize_1.AuthorizeActionPurpose.CreditCard)
        .forEach((creditCardAuthorizeAction) => {
        if (creditCardAuthorizeAction.result === undefined) {
            throw new argument_1.default('transaction', 'creditCardAuthorizeAction result does not exist');
        }
        paymentMethods.push({
            name: 'クレジットカード',
            paymentMethod: 'CreditCard',
            paymentMethodId: creditCardAuthorizeAction.result.execTranResult.orderId
        });
    });
    const seller = params.transaction.seller;
    const customer = Object.assign({
        id: params.transaction.agent.id,
        typeOf: params.transaction.agent.typeOf,
        name: `${cutomerContact.familyName} ${cutomerContact.givenName}`,
        url: ''
    }, params.transaction.object.customerContact);
    if (params.transaction.agent.memberOf !== undefined) {
        customer.memberOf = params.transaction.agent.memberOf;
    }
    // 座席仮予約から容認供給情報を生成する
    // 座席予約以外の注文アイテムが追加された場合は、このロジックに修正が加えられることになる
    const acceptedOffers = EventReservationFactory.createFromCOATmpReserve({
        updTmpReserveSeatResult: seatReservationAuthorizeAction.result.updTmpReserveSeatResult,
        offers: seatReservationAuthorizeAction.object.offers,
        individualScreeningEvent: seatReservationAuthorizeAction.object.individualScreeningEvent
    }).map((eventReservation) => {
        eventReservation.reservationStatus = reservationStatusType_1.default.ReservationConfirmed;
        eventReservation.underName.name = {
            ja: customer.name,
            en: customer.name
        };
        eventReservation.reservedTicket.underName.name = {
            ja: customer.name,
            en: customer.name
        };
        return {
            itemOffered: eventReservation,
            price: eventReservation.price,
            priceCurrency: priceCurrency_1.default.JPY,
            seller: {
                typeOf: seatReservationAuthorizeAction.object.individualScreeningEvent.superEvent.location.typeOf,
                name: seatReservationAuthorizeAction.object.individualScreeningEvent.superEvent.location.name.ja
            }
        };
    });
    const orderDate = new Date();
    // tslint:disable-next-line:no-magic-numbers
    const orderNumber = `${orderDate.toISOString().slice(0, 10)}-${orderInquiryKey.theaterCode}-${orderInquiryKey.confirmationNumber}`;
    return {
        typeOf: 'Order',
        seller: seller,
        customer: customer,
        price: seatReservationAuthorizeAction.result.price - discounts.reduce((a, b) => a + b.discount, 0),
        priceCurrency: priceCurrency_1.default.JPY,
        paymentMethods: paymentMethods,
        discounts: discounts,
        confirmationNumber: orderInquiryKey.confirmationNumber,
        orderNumber: orderNumber,
        acceptedOffers: acceptedOffers,
        // tslint:disable-next-line:no-suspicious-comment
        // TODO add confirmation URL domain
        url: `/inquiry/login?theater=${orderInquiryKey.theaterCode}&reserve=${orderInquiryKey.confirmationNumber}`,
        orderStatus: orderStatus_1.default.OrderDelivered,
        orderDate: orderDate,
        isGift: false,
        orderInquiryKey: orderInquiryKey
    };
}
exports.createFromPlaceOrderTransaction = createFromPlaceOrderTransaction;
