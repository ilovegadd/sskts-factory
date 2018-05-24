import * as ActionFactory from '../../../action';
import * as PecorinoAwardAuthorizeActionFactory from '../../authorize/award/pecorino';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象はPecorino賞金承認アクション
 */
export type IObject = PecorinoAwardAuthorizeActionFactory.IAttributes;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * Pecorino賞金返却アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
