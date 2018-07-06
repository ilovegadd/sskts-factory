import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

/**
 * 検証対象インターフェース
 */
export type IObject = any;
/**
 * 検証結果インターフェース
 */
export type IResult = any;
/**
 * 検証目的インターフェース
 */
export type IPurpose = any;
/**
 * アクション属性インターフェース
 */
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.ValidateAction, TObject, TResult> {
    purpose: IPurpose;
    recipient: ActionFactory.IParticipant;
}
/**
 * 検証アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
