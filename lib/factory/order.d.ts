/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *
 * @namespace factory/order
 */
import { IAuthorization as ISeatReservationAuthorization } from './authorization/seatReservation';
import OrderStatus from './orderStatus';
import PriceCurrency from './priceCurrency';
import { IReservation } from './reservation';
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
    orderNumber: number;
    telephone: string;
}
/**
 * offer interface
 * @type {IOffer}
 * @memberof factory/order
 */
export declare type IOffer = IReservation;
/**
 * seller interface
 * @interface {ISeller}
 * @memberof factory/order
 */
export interface ISeller {
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
export declare function createFromBuyTransaction(params: {
    seatReservationAuthorization: ISeatReservationAuthorization;
    customerName: string;
    seller: ISeller;
    orderNumber: string;
    orderInquiryKey: IOrderInquiryKey;
    paymentMethods: IPaymentMethod[];
    discounts: IDiscount[];
}): IOrder;
