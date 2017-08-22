/**
 * paymentMethod factory
 *
 * @namespace factory/paymentMethod
 */

/**
 * payment method interface
 * @interface {IPaymentMethod}
 * @memberof factory/paymentMethod
 */
export interface IPaymentMethod {
    typeOf: string;
    identifier: string;
}
