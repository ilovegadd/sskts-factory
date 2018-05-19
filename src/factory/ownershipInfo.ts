/**
 * 所有権ファクトリー
 */
import { IEvent } from './event';
import OrganizationType from './organizationType';
import PersonType from './personType';
import { IProgramMembership, ProgramMembershipType } from './programMembership';
import { IEventReservation } from './reservation/event';
import ReservationType from './reservationType';

/**
 * 所有対象物のタイプ
 */
export type IGoodType = ReservationType | ProgramMembershipType;

/**
 * 所有対象物インタエーフェース (Product or Service)
 */
export type IGood<T extends IGoodType> =
    /**
     * 予約タイプの場合
     */
    T extends ReservationType ? IEventReservation<IEvent> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    never;

/**
 * 所有者インターフェース
 */
export interface IOwner {
    typeOf: OrganizationType | PersonType;
    id: string;
    name: string;
}

export type OwnershipInfoType = 'OwnershipInfo';

/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGoodType> {
    /**
     * object type
     */
    typeOf: OwnershipInfoType;
    /**
     * identifier
     */
    identifier: string;
    /**
     * owned by whom
     */
    ownedBy: IOwner;
    /**
     * The organization or person from which the product was acquired.
     */
    acquiredFrom: IOwner;
    /**
     * The date and time of obtaining the product.
     */
    ownedFrom: Date;
    /**
     * The date and time of giving up ownership on the product.
     */
    ownedThrough?: Date;
    /**
     * 所有対象物
     */
    typeOfGood: IGood<T>;
}

/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
    /**
     * 所有対象物のタイプ
     */
    goodType: T;
    /**
     * 所有対象物
     */
    // typeOfGood?: {
    //     /**
    //      * どのイベント予約か
    //      */
    //     eventReservationFor?: {
    //         /**
    //          * イベントタイプ
    //          */
    //         typeOf: EventType;
    //         identifier: string;
    //     };
    // };
    /**
     * 所有者ID
     */
    ownedBy?: string;
    /**
     * いつの時点での所有か
     */
    ownedAt?: Date;
}
