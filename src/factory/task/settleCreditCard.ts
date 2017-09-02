/**
 * クレジットカード承認資産移動タスクファクトリー
 * @namespace factory/task/settleCreditCard
 */

import * as TaskFactory from '../task';
import * as TaskExecutionResult from '../taskExecutionResult';
import TaskName from '../taskName';
import TaskStatus from '../taskStatus';

export interface IData {
    transactionId: string;
}

export interface ITask extends TaskFactory.ITask {
    data: IData;
}

export function create(args: {
    id: string;
    status: TaskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: IData;
}): ITask {
    return TaskFactory.create({ ...args, ...{ name: TaskName.SettleCreditCard } });
}
