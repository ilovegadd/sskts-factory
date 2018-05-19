/**
 * programMembership factory
 */
import { IOffer } from './offer';
import { IOrganization } from './organization';

export type ProgramMembershipType = 'ProgramMembership';

/**
 * 会員プログラム識別子
 */
export enum ProgramMembershipIdentifier {
    /**
     * 開発用会員プログラム
     */
    DevPecorinoPlan = 'DevPecorinoPlan'
}

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership {
    /**
     * 会員プログラム識別子
     */
    identifier: ProgramMembershipIdentifier;
    /**
     * プログラムのホスト組織
     */
    hostingOrganization?: IOrganization;
    typeOf: ProgramMembershipType;
    /**
     * 会員番号
     */
    membershipNumber?: string;
    /**
     * プログラム名
     */
    programName: string;
    /**
     * 会員プログラムに対するオファー
     * このオファーに対して注文取引を成立させると、ユーザーに会員プログラムが所有権として付与されます。
     */
    offers?: IOffer[];
}
