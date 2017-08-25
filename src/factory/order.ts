/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *
 * @namespace factory/order
 */

import ArgumentError from '../error/argument';

import { IAuthorization as IGMOAuthorization } from './authorization/gmo';
import { IAuthorization as IMvtkAuthorization } from './authorization/mvtk';
import AuthorizationGroup from './authorizationGroup';
import OrderStatus from './orderStatus';
import PriceCurrency from './priceCurrency';
import { IReservation } from './reservation';
import ReservationStatusType from './reservationStatusType';
import { ITransaction } from './transaction/placeOrder';

/**
 * payment method interface
 * @interface {IPaymentMethod}
 * @memberof factory/order
 */
export interface IPaymentMethod {
    name: string;
    /**
     * The name of the credit card or other method of payment for the order.
     */
    paymentMethod: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
}

/**
 * discount interface
 * @interface {IDiscount}
 * @memberof factory/order
 */
export interface IDiscount {
    name: string;
    /**
     * Any discount applied.
     */
    discount: number;
    /**
     * Code used to redeem a discount.
     */
    discountCode: string;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the discount.
     */
    discountCurrency: string;
}

/**
 * key for inquiry of the order
 * @interface {IOrderInquiryKey}
 * @memberof factory/order
 */
export interface IOrderInquiryKey {
    theaterCode: string;
    confirmationNumber: number;
    telephone: string;
}

/**
 * offer interface
 * @type {IOffer}
 * @memberof factory/order
 */
export interface IOffer {
    itemOffered: IReservation;
    price: number;
    priceCurrency: PriceCurrency;
    seller: {
        typeOf: string;
        name: string;
    };
}

/**
 * seller interface
 * @interface {ISeller}
 * @memberof factory/order
 */
export interface ISeller {
    typeOf: string;
    /**
     * Name of the Organization.
     */
    name: string;
    /**
     * The Freebase URL for the merchant.
     */
    url: string;
}

/**
 * customer interface
 * @interface {ICustomer}
 * @memberof factory/order
 */
export interface ICustomer {
    typeOf: string;
    /**
     * Name of the Person.
     */
    name: string;
    /**
     * URL of the item.
     */
    url: string;
}

/**
 * order interface
 * @interface {IOrder}
 * @memberof factory/order
 */
export interface IOrder {
    /**
     * object type
     */
    typeOf: string;
    /**
     * Organization or Person
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Person or Organization
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: number;
    /**
     * The merchant- specific identifier for the transaction.
     */
    orderNumber: string;
    /**
     * The total price of the entire transaction.
     */
    price: number;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the order price.
     */
    priceCurrency: PriceCurrency;
    /**
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IOffer[];
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod[];
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url: string;
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * Date order was placed.
     */
    orderDate: Date;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift: boolean;
    /**
     * key for inquiry (required)
     */
    orderInquiryKey: IOrderInquiryKey;
}

/**
 * create order object from transaction parameters
 * @function
 * @memberof factory/order
 */
// tslint:disable-next-line:max-func-body-length
export function createFromPlaceOrderTransaction(params: {
    transaction: ITransaction
}): IOrder {
    // seatReservation exists?
    const seatReservationAuthorization = params.transaction.object.seatReservation;
    if (seatReservationAuthorization === undefined) {
        throw new ArgumentError('transaction', 'seat reservation does not exist');
    }

    if (params.transaction.object.customerContact === undefined) {
        throw new ArgumentError('transaction', 'customer contact does not exist');
    }

    const cutomerContact = params.transaction.object.customerContact;
    const orderInquiryKey = {
        theaterCode: seatReservationAuthorization.object.updTmpReserveSeatArgs.theaterCode,
        confirmationNumber: seatReservationAuthorization.result.tmpReserveNum,
        telephone: cutomerContact.telephone
    };

    // 結果作成
    const discounts: IDiscount[] = [];
    params.transaction.object.discountInfos.forEach((discountInfo) => {
        switch (discountInfo.group) {
            case AuthorizationGroup.MVTK:
                const discountCode = (<IMvtkAuthorization>discountInfo).result.knyknrNoInfo.map(
                    (knshInfo) => knshInfo.knyknrNo
                ).join(',');

                discounts.push({
                    name: 'ムビチケカード',
                    discount: discountInfo.price,
                    discountCode: discountCode,
                    discountCurrency: PriceCurrency.JPY
                });
                break;

            default:
                break;
        }
    });

    const paymentMethods: IPaymentMethod[] = [];
    params.transaction.object.paymentInfos.forEach((paymentInfo) => {
        switch (paymentInfo.group) {
            case AuthorizationGroup.GMO:
                paymentMethods.push({
                    name: 'クレジットカード',
                    paymentMethod: 'CreditCard',
                    paymentMethodId: (<IGMOAuthorization>paymentInfo).result.orderId
                });
                break;

            default:
                break;
        }
    });

    const seller: ISeller = params.transaction.seller;
    const customer: ICustomer = {
        typeOf: params.transaction.agent.typeOf,
        name: `${cutomerContact.familyName} ${cutomerContact.givenName}`,
        url: ''
    };

    const acceptedOffers = seatReservationAuthorization.object.acceptedOffers.map((offer) => {
        offer.itemOffered.reservationStatus = ReservationStatusType.ReservationConfirmed;
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
        priceCurrency: PriceCurrency.JPY,
        paymentMethods: paymentMethods,
        discounts: discounts,
        confirmationNumber: orderInquiryKey.confirmationNumber,
        orderNumber: orderNumber,
        acceptedOffers: acceptedOffers,
        // tslint:disable-next-line:no-suspicious-comment
        url: '', // TODO confirmation URL
        orderStatus: OrderStatus.OrderDelivered,
        orderDate: orderDate,
        isGift: false,
        orderInquiryKey: orderInquiryKey
    };
}
