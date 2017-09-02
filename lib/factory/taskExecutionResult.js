"use strict";
/**
 * タスク実行結果ファクトリー
 *
 * @namespace factory/taskExecutionResult
 */
Object.defineProperty(exports, "__esModule", { value: true });
function create(args) {
    return {
        id: args.id,
        executedAt: args.executedAt,
        error: args.error
    };
}
exports.create = create;
