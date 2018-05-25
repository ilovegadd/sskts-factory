import * as ProgramMembershipFactory from '../../../programMembership';
import * as RegisterActionFactory from '../register';

/**
 * 会員プログラム登録アクションの対象は、会員プログラムとオファーを識別できる情報
 */
export interface IObject {
    typeOf: ProgramMembershipFactory.ProgramMembershipType;
    /**
     * 会員プログラムID
     */
    programMembershipId: string;
    /**
     * 会員プログラムに対するオファー識別子
     */
    offerIdentifier: string;
    /**
     * 決済対象の販売者ID
     * クレジットカード決済時にどこかの劇場ショップを指定するため、劇場(販売者)のIDが必要。
     */
    sellerId: string;
}
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 会員プログラム登録アクションインターフェース
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
