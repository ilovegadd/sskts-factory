"use strict";
/**
 * 座席予約承認資産移動ファクトリー
 * @namespace task.settleSeatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function createAttributes(params) {
    return TaskFactory.createAttributes(Object.assign({}, params, { name: taskName_1.default.SettleSeatReservation }));
}
exports.createAttributes = createAttributes;
