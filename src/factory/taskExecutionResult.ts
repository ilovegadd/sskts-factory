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

export function create(args: {
    id: string;
    executedAt: Date;
    error: string;
}): ITaskExecutionResult {
    return {
        id: args.id,
        executedAt: args.executedAt,
        error: args.error
    };
}
