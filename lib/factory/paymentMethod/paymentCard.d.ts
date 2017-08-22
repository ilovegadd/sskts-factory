/**
 * payment card factory
 *
 * @namespace factory/paymentMethod/paymentCard
 */
import { IPaymentMethod } from '../paymentMethod';
/**
 * payment card interface
 * @interface {IPaymentCard}
 * @memberof factory/paymentMethod/paymentCard
 */
export interface IPaymentCard extends IPaymentMethod {
    /**
     * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
     */
    cashBack?: number;
}
