/**
 * programMembership factory
 * @namespace factory/programMembership
 */

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @export
 * @interface {IProgramMembership}
 * @memberof factory/programMembership
 */
export interface IProgramMembership {
    membershipNumber: string;
    programName: string;
}
