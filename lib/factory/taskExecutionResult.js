"use strict";
/**
 * タスク実行結果ファクトリー
 * @namespace taskExecutionResult
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createAttributes(params) {
    return {
        executedAt: params.executedAt,
        error: params.error
    };
}
exports.createAttributes = createAttributes;
