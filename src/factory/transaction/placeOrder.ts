/**
 * 注文取引ファクトリー
 * @namespace factory/transaction/placeOrder
 */

import * as GMOAuthorizationFactory from '../authorization/gmo';
import * as MvtkAuthorizationFactory from '../authorization/mvtk';
import * as SeatReservationAuthorizationFactory from '../authorization/seatReservation';
import * as ClientUserFactory from '../clientUser';
import * as OrderFactory from '../order';
import * as OwnershipInfoFactory from '../ownershipInfo';
import * as ProgramMembershipFactory from '../programMembership';
import { IReservation } from '../reservation';
import * as TaskFactory from '../task';
import * as TranstransactionFactory from '../transaction';
import TransactionStatusType from '../transactionStatusType';
import TransactionTasksExportationStatus from '../transactionTasksExportationStatus';
import TransactionType from '../transactionType';

/**
 * available payment info interface
 * @export
 * @type
 * @memberof factory/transaction/placeOrder
 */
export type IAvailablePaymentInfo = GMOAuthorizationFactory.IAuthorization;

/**
 * available discount info interface
 * @export
 * @type
 * @memberof factory/transaction/placeOrder
 */
export type IAvailableDiscount = MvtkAuthorizationFactory.IAuthorization;

/**
 * customer contact interface
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface ICustomerContact {
    givenName: string;
    familyName: string;
    email: string;
    telephone: string;
}

/**
 * 販売者インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface ISeller {
    typeOf: string;
    id: string;
    name: string;
    url: string;
}

/**
 * 購入者インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface IAgent {
    id: string;
    typeOf: string;
    memberOf?: ProgramMembershipFactory.IProgramMembership;
    url: string;
}

/**
 * 取引結果インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: OrderFactory.IOrder;
    /**
     * 購入者に与えられる所有権リスト
     */
    ownershipInfos: OwnershipInfoFactory.IOwnershipInfo<IReservation>[];
}

/**
 * エラーインターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export type IError = any;

/**
 * 取引対象物インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface IObject {
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser: ClientUserFactory.IClientUser;
    /**
     * customer contact
     */
    customerContact?: ICustomerContact;
    /**
     * payment infos
     */
    paymentInfos: IAvailablePaymentInfo[];
    /**
     * 座席予約情報
     */
    seatReservation?: SeatReservationAuthorizationFactory.IAuthorization;
    /**
     * discount infos
     */
    discountInfos: IAvailableDiscount[];
}

/**
 * place order transaction interface
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export interface ITransaction extends TranstransactionFactory.ITransaction {
    /**
     * 購入者
     */
    agent: IAgent;
    /**
     * 販売者
     */
    seller: ISeller;
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
     * 座席仮予約、クレジットカードのオーソリなど、取引を構成する承認などが含まれます。
     */
    object: IObject;
}

/**
 * create placeOrderTransaction object.
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export function create(args: {
    id?: string;
    status: TransactionStatusType;
    agent: IAgent
    seller: ISeller;
    result?: IResult;
    error?: IError;
    object: IObject;
    expires: Date;
    startDate?: Date;
    endDate?: Date;
    tasksExportedAt?: Date;
    tasksExportationStatus?: TransactionTasksExportationStatus;
    tasks?: TaskFactory.ITask[];
}): ITransaction {
    return {
        ...TranstransactionFactory.create({
            typeOf: TransactionType.PlaceOrder,
            status: args.status,
            agent: args.agent,
            result: args.result,
            error: args.error,
            object: args.object,
            expires: args.expires,
            startDate: args.startDate,
            endDate: args.endDate,
            tasksExportedAt: args.tasksExportedAt,
            tasksExportationStatus: args.tasksExportationStatus,
            tasks: args.tasks
        }),
        ...{
            seller: args.seller,
            object: args.object
        }
    };
}
