/**
 * person factory
 *
 * @namespace factory/person
 */
import * as ProgramMembershipFactory from './programMembership';
/**
 * contact interface
 * @export
 * @interface {IPerson}
 * @memberof factory/person
 */
export interface IContact {
    /**
     * Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.
     */
    givenName: string;
    /**
     * Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.
     */
    familyName: string;
    /**
     * The telephone number.
     */
    telephone: string;
}
/**
 * person interface
 * @export
 * @interface {IPerson}
 * @memberof factory/person
 */
export interface IPerson {
    /**
     * type of object
     */
    typeOf: string;
    /**
     * person id (Amazon Cognito User Identifier)
     */
    id: string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: ProgramMembershipFactory.IProgramMembership;
}
