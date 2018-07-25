import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as IUseMvtkActionAttributes } from '../consume/use/mvtk';
import { IAttributes as IPayActionAttributes } from '../trade/pay';
import { IAttributes as IGivePecorinoAwardActionAttributes } from '../transfer/give/pecorinoAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = IOrder;
export type IResult = any;
export interface IPotentialActions {
    /**
     * 注文配送アクション
     */
    sendOrder: ISendOrderActionAttributes;
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes<PaymentMethodType.CreditCard>;
    /**
     * Pecorino決済実行アクションリスト
     */
    payPecorino: IPayActionAttributes<PaymentMethodType.Pecorino>[];
    /**
     * Mocoin決済実行アクションリスト
     */
    payMocoin: IPayActionAttributes<PaymentMethodType.Mocoin>[];
    /**
     * ムビチケ使用アクション
     */
    useMvtk?: IUseMvtkActionAttributes;
    /**
     * Pecorino付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePecorinoAward: IGivePecorinoAwardActionAttributes[];
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 注文アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
