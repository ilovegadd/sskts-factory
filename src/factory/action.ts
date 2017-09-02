/**
 * action factory
 * アクションファクトリー
 * @namespace factory/action
 */

export enum ActionType {
    AuthorizeAction = 'AuthorizeAction'
}

export enum ActionStatusType {
    ActiveActionStatus = 'ActiveActionStatus',
    CompletedActionStatus = 'CompletedActionStatus',
    FailedActionStatus = 'FailedActionStatus',
    PotentialActionStatus = 'PotentialActionStatus',
    CanceledActionStatus = 'CanceledActionStatus'
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
