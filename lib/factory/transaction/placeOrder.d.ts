/**
 * placeOrder transaction factory
 * 注文取引ファクトリー
 * @namespace factory/transaction/placeOrder
 */
import * as GMOAuthorizationFactory from '../authorization/gmo';
import * as MvtkAuthorizationFactory from '../authorization/mvtk';
import * as SeatReservationAuthorizationFactory from '../authorization/seatReservation';
import * as ClientUserFactory from '../clientUser';
import * as OrderFactory from '../order';
import * as OwnershipInfoFactory from '../ownershipInfo';
import { IContact, IPerson } from '../person';
import { IReservation } from '../reservation';
import * as TaskFactory from '../task';
import * as TranstransactionFactory from '../transaction';
import TransactionStatusType from '../transactionStatusType';
import TransactionTasksExportationStatus from '../transactionTasksExportationStatus';
/**
 * available payment info interface
 * 利用可能な決済情報インターフェース
 * @export
 * @type
 * @memberof factory/transaction/placeOrder
 */
export declare type IAvailablePaymentInfo = GMOAuthorizationFactory.IAuthorization;
/**
 * available discount info interface
 * 利用可能な割引情報インターフェース
 * @export
 * @type
 * @memberof factory/transaction/placeOrder
 */
export declare type IAvailableDiscount = MvtkAuthorizationFactory.IAuthorization;
/**
 * customer contact interface
 * 購入者連作先インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export declare type ICustomerContact = IContact;
/**
 * seller interface
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
 * agent interface
 * 購入者インターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export declare type IAgent = IPerson;
/**
 * result interface
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
 * error interface
 * エラーインターフェース
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export declare type IError = any;
/**
 * object of a transaction interface
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
 * 注文取引インターフェース
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
 * 注文取引オブジェクトを生成する。
 * @export
 * @interface
 * @memberof factory/transaction/placeOrder
 */
export declare function create(args: {
    id: string;
    status: TransactionStatusType;
    agent: IAgent;
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
}): ITransaction;
