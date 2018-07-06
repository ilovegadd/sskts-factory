/**
 * 決済方法としてのクレジットカード有効性チェックファクトリー
 */
import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { ITransaction } from '../../../transaction/placeOrder';
import * as ValidateActionFactory from '../validate';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    CreditCard = 'CreditCard'
}

/**
 * 有効性チェック対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    orderId: string;
    amount: number;
    method: GMO.utils.util.Method;
    payType: GMO.utils.util.PayType;
}

export interface IResult {
    price: number;
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
    execTranResult: GMO.services.credit.IExecTranResult;
}

export type IPurpose = ITransaction;

/**
 * GMO有効性チェックインターフェース
 */
export interface IAttributes extends ValidateActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.ValidateAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
