/**
 * ownershipInfo factory
 *
 * @namespace factory/ownershipInfo
 */
import { IReservation } from './reservation';
/**
 * good interface (Product or Service)
 * @interface {IOwner}
 * @memberof factory/ownershipInfo
 */
export declare type IGood = IReservation;
/**
 * owner interface
 * @interface {IOwner}
 * @memberof factory/ownershipInfo
 */
export interface IOwner {
    typeOf: string;
    id: string;
    name: string;
}
/**
 * ownershipInfo interface
 * @interface {IOwnershipInfo}
 * @memberof factory/ownershipInfo
 */
export interface IOwnershipInfo {
    /**
     * object type
     */
    typeOf: string;
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
    ownedThrough: Date;
    /**
     * The product that this structured value is referring to.
     */
    typeOfGood: IGood;
}
/**
 * create ownershipInfo
 * @function
 * @memberof factory/ownershipInfo
 */
export declare function create(args: {
    ownedBy: IOwner;
    acquiredFrom: IOwner;
    ownedFrom: Date;
    ownedThrough: Date;
    typeOfGood: IGood;
}): IOwnershipInfo;
