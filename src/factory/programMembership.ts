/**
 * programMembership factory
 */
import { IOffer } from './offer';
import { IOrganization } from './organization';

export type ProgramMembershipType = 'ProgramMembership';

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership {
    hostingOrganization?: IOrganization;
    typeOf: ProgramMembershipType;
    membershipNumber: string;
    programName: string;
    offers?: IOffer[];
}
