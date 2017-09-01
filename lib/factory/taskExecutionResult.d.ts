/**
 * タスク実行結果ファクトリー
 *
 * @namespace factory/taskExecutionResult
 */
export interface ITaskExecutionResult {
    id: string;
    executedAt: Date;
    error: string;
}
export declare function create(args: {
    id: string;
    executedAt: Date;
    error: string;
}): ITaskExecutionResult;
