"use strict";
/**
 * チケット印刷アクションファクトリー
 * @namespace action.transfer.print.ticket
 */
Object.defineProperty(exports, "__esModule", { value: true });
const PrintActionFactory = require("../print");
function createAttributes(params) {
    return PrintActionFactory.createAttributes(params);
}
exports.createAttributes = createAttributes;
