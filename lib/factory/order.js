"use strict";
/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *
 * @namespace factory/order
 */
Object.defineProperty(exports, "__esModule", { value: true });
const orderStatus_1 = require("./orderStatus");
const priceCurrency_1 = require("./priceCurrency");
const reservationStatusType_1 = require("./reservationStatusType");
/**
 * create order object from transaction parameters
 * @function
 * @memberof factory/order
 */
function createFromBuyTransaction(params) {
    return {
        typeOf: 'Order',
        seller: params.seller,
        orderNumber: params.orderNumber,
        priceCurrency: priceCurrency_1.default.JPY,
        price: params.seatReservationAuthorization.price,
        acceptedOffers: params.seatReservationAuthorization.object.acceptedOffers.map((offer) => {
            const reservation = offer.itemOffered;
            reservation.reservationStatus = reservationStatusType_1.default.ReservationConfirmed;
            reservation.underName.name = params.customerName;
            reservation.reservedTicket.underName.name = params.customerName;
            return offer.itemOffered;
        }),
        // tslint:disable-next-line:no-suspicious-comment
        url: '',
        orderStatus: orderStatus_1.default.OrderDelivered,
        paymentMethods: params.paymentMethods,
        orderDate: new Date(),
        isGift: false,
        discounts: params.discounts,
        customer: {
            name: params.customerName,
            url: ''
        },
        orderInquiryKey: params.orderInquiryKey
    };
}
exports.createFromBuyTransaction = createFromBuyTransaction;
