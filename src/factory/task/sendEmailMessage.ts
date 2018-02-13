/**
 * Eメール送信タスクファクトリー
 * @namespace task.sendEmailMessage
 */

import { IAttributes as ISendEmailMessageActionAttributest } from '../action/transfer/send/message/email';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import * as TaskExecutionResult from '../taskExecutionResult';
import TaskName from '../taskName';
import TaskStatus from '../taskStatus';

export interface IData {
    /**
     * Eメール送信アクション属性
     */
    actionAttributes: ISendEmailMessageActionAttributest;
}

export interface IAttributes extends TaskFactory.IAttributes {
    data: IData;
}

export type ITask = IExtendId<IAttributes>;

export function createAttributes(params: {
    status: TaskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: IData;
}): IAttributes {
    return TaskFactory.createAttributes({ ...params, ...{ name: TaskName.sendEmailMessage } });
}
