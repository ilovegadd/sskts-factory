/**
 * 座席予約承認資産移動ファクトリー
 * @namespace task.settleSeatReservation
 */
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import * as TaskExecutionResult from '../taskExecutionResult';
import TaskStatus from '../taskStatus';
export interface IData {
    transactionId: string;
}
export interface IAttributes extends TaskFactory.IAttributes {
    data: IData;
}
export declare type ITask = IExtendId<IAttributes>;
export declare function createAttributes(params: {
    status: TaskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: IData;
}): IAttributes;
