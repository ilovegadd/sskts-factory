import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import { IPecorinoTransaction } from '../../action/authorize/paymentMethod/pecorino';
import ActionType from '../../actionType';
import { IOrder, IPaymentMethod } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = IOrder;

export interface ICommonObject<T extends PaymentMethodType> {
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<T>;
}

/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface IObject4creditCard extends ICommonObject<PaymentMethodType.CreditCard> {
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
}
/**
 * Pecorino決済の場合のオブジェクトインターフェース
 */
export interface IObject4pecorino extends ICommonObject<PaymentMethodType.Pecorino> {
    pecorinoTransaction: IPecorinoTransaction;
    pecorinoEndpoint: string;
}
export type IObject<T> =
    T extends PaymentMethodType.CreditCard ? IObject4creditCard :
    T extends PaymentMethodType.Pecorino ? IObject4pecorino :
    never;

/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface IResult4creditCard {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult;
}

export type IResult<T> =
    T extends PaymentMethodType.CreditCard ? IResult4creditCard :
    T extends PaymentMethodType.Pecorino ? any :
    never;

export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.PayAction;
    purpose: IPurpose;
}

/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
