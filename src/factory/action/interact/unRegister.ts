import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = any;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.UnRegisterAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 登録解除アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
