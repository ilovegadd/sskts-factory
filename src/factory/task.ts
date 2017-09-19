/**
 * タスクファクトリー
 * @namespace task
 */

import * as _ from 'underscore';

import ArgumentError from '../error/argument';
import ArgumentNullError from '../error/argumentNull';

import { IExtendId } from './autoGenerated';
import * as TaskExecutionResult from './taskExecutionResult';
import TaskName from './taskName';
import TaskStatus from './taskStatus';

export type ITask = IExtendId<IAttributes>;

export interface IAttributes {
    name: TaskName;
    status: TaskStatus;
    /**
     * いつ実行するか
     *
     * @type {Date}
     * @memberof ITask
     */
    runsAt: Date;
    /**
     * あと何回トライできるか
     *
     * @type {number}
     * @memberof ITask
     */
    remainingNumberOfTries: number;
    /**
     * 最終トライ日時
     *
     * @type {(Date | null)}
     * @memberof ITask
     */
    lastTriedAt: Date | null;
    /**
     * すでにトライした回数
     *
     * @type {number}
     * @memberof ITask
     */
    numberOfTried: number;
    /**
     * 実行結果リスト
     *
     * @type {TaskExecutionResult.ITaskExecutionResult[]}
     * @memberof ITask
     */
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     *
     * @type {*}
     * @memberof ITask
     */
    data: any;
}

export function createAttributes(params: {
    name: TaskName;
    status: TaskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: any;
}): IAttributes {
    if (_.isEmpty(params.status)) {
        throw new ArgumentNullError('status');
    }
    if (!_.isDate(params.runsAt)) {
        throw new ArgumentError('runsAt', 'runsAt should be Date');
    }
    if (!_.isNumber(params.remainingNumberOfTries)) {
        throw new ArgumentError('remainingNumberOfTries', 'remainingNumberOfTries should be number');
    }
    if (!_.isNull(params.lastTriedAt) && !_.isDate(params.lastTriedAt)) {
        throw new ArgumentError('lastTriedAt', 'lastTriedAt should be Date or null');
    }
    if (!_.isNumber(params.numberOfTried)) {
        throw new ArgumentError('numberOfTried', 'numberOfTried should be number');
    }
    if (!_.isArray(params.executionResults)) {
        throw new ArgumentError('executionResults', 'executionResults should be array');
    }

    return {
        name: params.name,
        status: params.status,
        runsAt: params.runsAt,
        remainingNumberOfTries: params.remainingNumberOfTries,
        lastTriedAt: params.lastTriedAt,
        numberOfTried: params.numberOfTried,
        executionResults: params.executionResults,
        data: params.data
    };
}
