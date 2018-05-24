/**
 * 注文返品アクションファクトリー
 */
import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import PaymentMethodType from '../../../paymentMethodType';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';
import * as PecorinoAwardReturnActionFactory from './pecorinoAward';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は注文
 */
export type IObject = IOrder;

export type IResult = any;

export interface IPotentialActions {
    refundCreditCard?: IRefundActionAttributes<PaymentMethodType.CreditCard>;
    refundPecorino: IRefundActionAttributes<PaymentMethodType.Pecorino>[];
    returnPecorinoAward?: PecorinoAwardReturnActionFactory.IAttributes;
}

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

export type IAction = ReturnActionFactory.IAction<IAttributes>;
