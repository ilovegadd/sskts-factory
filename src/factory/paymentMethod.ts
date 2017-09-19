/**
 * paymentMethod factory
 * @namespace paymentMethod
 */

/**
 * payment method interface
 * @interface {IPaymentMethod}
 * @memberof paymentMethod
 */
export interface IPaymentMethod {
    typeOf: string;
    identifier: string;
}
