/**
 * 返品取引ファクトリー
 * @namespace transaction.returnOrder
 */

import { IAttributes as IReturnOrderActionAttributes } from '../action/transfer/return/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IPerson } from '../person';
import * as TransactionFactory from '../transaction';
import * as IPlaceOrderTransactionFactory from '../transaction/placeOrder';
import TransactionStatusType from '../transactionStatusType';
import TransactionTasksExportationStatus from '../transactionTasksExportationStatus';
import TransactionType from '../transactionType';

/**
 * agent interface
 * 購入者インターフェース
 * @export
 */
export type IAgent = IPerson;

/**
 * result interface
 * 取引結果インターフェース
 * @export
 */
export type IResult = any;

/**
 * error interface
 * エラーインターフェース
 * @export
 */
export type IError = any;

/**
 * 返品理由
 */
export enum Reason {
    /**
     * 購入者自身の都合での返品
     */
    Customer = 'Customer',
    /**
     * 販売者都合での返品
     */
    Seller = 'Seller'
}

/**
 * object of a transaction interface
 * 取引対象物インターフェース
 * @export
 */
export interface IObject {
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser: IClientUser;
    transaction: IPlaceOrderTransactionFactory.ITransaction;
    cancellationFee: number;
    reason: Reason;
}

export interface IPotentialActions {
    /**
     * 注文返品アクション属性
     */
    returnOrder: IReturnOrderActionAttributes;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 返品取引インターフェース
 * @export
 */
export interface IAttributes extends TransactionFactory.IAttributes<IAgent, IObject, IResult> {
    /**
     * 購入者
     */
    agent: IAgent;
    /**
     * 取引の結果発生するもの
     */
    result?: IResult;
    /**
     * 取引に関するエラー
     */
    error?: IError;
    /**
     * 取引の対象物
     */
    object: IObject;
    /**
     * 事後発生アクション
     */
    potentialActions?: IPotentialActions;
}

/**
 * 返品取引オブジェクトを生成する。
 * @export
 */
export function createAttributes(params: {
    status: TransactionStatusType;
    agent: IAgent;
    result?: IResult;
    error?: IError;
    object: IObject;
    expires: Date;
    startDate?: Date;
    endDate?: Date;
    tasksExportedAt?: Date;
    tasksExportationStatus: TransactionTasksExportationStatus;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        ...TransactionFactory.createAttributes<IAgent, IObject, IResult>({
            typeOf: TransactionType.ReturnOrder,
            status: params.status,
            agent: params.agent,
            result: params.result,
            error: params.error,
            object: params.object,
            expires: params.expires,
            startDate: params.startDate,
            endDate: params.endDate,
            tasksExportedAt: params.tasksExportedAt,
            tasksExportationStatus: params.tasksExportationStatus,
            potentialActions: params.potentialActions
        }),
        ...{
            object: params.object
        }
    };
}
