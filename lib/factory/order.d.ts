import { IEvent as IIndividualScreeningEvent } from './event/individualScreeningEvent';
import OrderStatus from './orderStatus';
import { IContact, IPerson } from './person';
import PriceCurrency from './priceCurrency';
import { IEventReservation } from './reservation/event';
import { ITransaction } from './transaction/placeOrder';
/**
 * payment method interface
 * 決済方法イーターフェース
 * @export
 * @interface
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
 * 割引インターフェース
 * @export
 * @interface
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
 * offered item type
 * 供給アイテムインターフェース
 * @export
 * @type
 * @memberof factory/order
 */
export declare type IItemOffered = IEventReservation<IIndividualScreeningEvent>;
/**
 * key for inquiry of the order
 * 注文照会キーインターフェース
 * @export
 * @interface
 * @memberof factory/order
 */
export interface IOrderInquiryKey {
    theaterCode: string;
    confirmationNumber: number;
    telephone: string;
}
/**
 * offer interface
 * 供給インターフェース
 * @export
 * @interface
 * @memberof factory/order
 */
export interface IOffer {
    itemOffered: IItemOffered;
    price: number;
    priceCurrency: PriceCurrency;
    seller: {
        typeOf: string;
        name: string;
    };
}
/**
 * seller interface
 * 販売者インターフェース
 * @export
 * @interface
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
 * 購入者インターフェース
 * @export
 * @interface
 * @memberof factory/order
 */
export declare type ICustomer = IPerson & IContact & {
    name: string;
};
/**
 * order interface
 * 注文インターフェース
 * @export
 * @interface
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
 * 取引オブジェクトから注文オブジェクトを生成する
 * @export
 * @function
 * @memberof factory/order
 */
export declare function createFromPlaceOrderTransaction(params: {
    transaction: ITransaction;
}): IOrder;
