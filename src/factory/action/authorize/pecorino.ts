/**
 * Pecorino口座承認アクションファクトリー
 */
import * as pecorinoFactory from '@motionpicture/pecorino-factory';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { ITransaction } from '../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    Pecorino = 'Pecorino'
}

/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    transactionId: string;
    price: number;
}

export type IPecorinoTransaction = pecorinoFactory.transaction.pay.ITransaction | pecorinoFactory.transaction.transfer.ITransaction;

export interface IResult {
    price: number;
    pecorinoTransaction: IPecorinoTransaction;
    pecorinoEndpoint: string;
}

export type IPurpose = ITransaction;

export type IError = any;

/**
 * Pecorino承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    typeOf: ActionType.AuthorizeAction;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
