/**
 * 注文アクションファクトリー
 */
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as IUseMvtkActionAttributes } from '../consume/use/mvtk';
import { IAttributes as IPayActionAttributes } from '../trade/pay';
import { IAttributes as IGivePecorinoActionAttributes } from '../transfer/give/pecorino';
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
     * ムビチケ使用アクション
     */
    useMvtk?: IUseMvtkActionAttributes;
    /**
     * Pecorino付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePecorino: IGivePecorinoActionAttributes[];
}

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        typeOf: ActionType.OrderAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        potentialActions: params.potentialActions
    };
}
