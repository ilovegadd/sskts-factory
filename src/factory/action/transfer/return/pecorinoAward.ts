import * as ActionFactory from '../../../action';
import * as GivePecorinoAwardActionFactory from '../give/pecorinoAward';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象はPecorino賞金付与アクション
 */
export type IObject = GivePecorinoAwardActionFactory.IAttributes;

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
