/**
 * action factory
 * アクションファクトリー
 * @namespace factory/action
 */
export declare enum ActionType {
    AuthorizeAction = "AuthorizeAction",
}
export declare enum ActionStatusType {
    ActiveActionStatus = "ActiveActionStatus",
    CompletedActionStatus = "CompletedActionStatus",
    FailedActionStatus = "FailedActionStatus",
    PotentialActionStatus = "PotentialActionStatus",
    CanceledActionStatus = "CanceledActionStatus",
}
export interface IAction {
    id: string;
    typeOf: ActionType;
    actionStatus: ActionStatusType;
    agent?: any;
    recipient?: any;
    result?: any;
    error?: any;
    object?: any;
    startDate?: Date;
    endDate?: Date;
}
