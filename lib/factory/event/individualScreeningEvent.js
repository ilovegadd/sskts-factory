"use strict";
/**
 * individual screening event factory
 * 個々の上映イベントファクトリー
 * @namespace factory/event/individualScreeningEvent
 */
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const _ = require("underscore");
const argument_1 = require("../../error/argument");
const EventFactory = require("../event");
const eventStatusType_1 = require("../eventStatusType");
const eventType_1 = require("../eventType");
/**
 * 座席数から在庫状況表現を生成する
 *
 * @param {number} numberOfAvailableSeats 空席数
 * @param {number} numberOfAllSeats 全座席数
 * @returns {IItemAvailability} 在庫状況表現
 */
function createItemAvailability(numberOfAvailableSeats, numberOfAllSeats) {
    if (!_.isNumber(numberOfAvailableSeats)) {
        throw new argument_1.default('numberOfAvailableSeats', 'numberOfAvailableSeats should be number');
    }
    if (!_.isNumber(numberOfAllSeats)) {
        throw new argument_1.default('numberOfAllSeats', 'numberOfAllSeats should be number');
    }
    if (numberOfAllSeats === 0) {
        return 0;
    }
    // 残席数より空席率を算出
    // tslint:disable-next-line:no-magic-numbers
    return Math.floor(numberOfAvailableSeats / numberOfAllSeats * 100);
}
exports.createItemAvailability = createItemAvailability;
/**
 * create individualScreeningEvent from COA performance
 * @export
 * @function
 * @memberof factory/event/individualScreeningEvent
 */
function createFromCOA(params) {
    const identifier = createIdFromCOA({
        screeningEvent: params.screeningEvent,
        dateJouei: params.performanceFromCOA.dateJouei,
        screenCode: params.performanceFromCOA.screenCode,
        timeBegin: params.performanceFromCOA.timeBegin
    });
    return Object.assign({}, EventFactory.create({
        eventStatus: eventStatusType_1.default.EventScheduled,
        typeOf: eventType_1.default.IndividualScreeningEvent,
        identifier: identifier,
        name: params.screeningEvent.name
    }), {
        workPerformed: params.screeningEvent.workPerformed,
        location: {
            typeOf: params.screenRoom.typeOf,
            branchCode: params.screenRoom.branchCode,
            name: params.screenRoom.name
        },
        // tslint:disable-next-line:max-line-length
        endDate: moment(`${params.performanceFromCOA.dateJouei} ${params.performanceFromCOA.timeEnd} +09:00`, 'YYYYMMDD HHmm Z').toDate(),
        startDate: moment(`${params.performanceFromCOA.dateJouei} ${params.performanceFromCOA.timeBegin} +09:00`, 'YYYYMMDD HHmm Z').toDate(),
        superEvent: params.screeningEvent,
        coaInfo: {
            theaterCode: params.screeningEvent.location.branchCode,
            dateJouei: params.performanceFromCOA.dateJouei,
            titleCode: params.performanceFromCOA.titleCode,
            titleBranchNum: params.performanceFromCOA.titleBranchNum,
            timeBegin: params.performanceFromCOA.timeBegin,
            screenCode: params.performanceFromCOA.screenCode,
            trailerTime: params.performanceFromCOA.trailerTime,
            kbnService: params.serviceKubuns.find((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnService),
            kbnAcoustic: params.acousticKubuns.find((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnAcoustic),
            nameServiceDay: params.performanceFromCOA.nameServiceDay,
            availableNum: params.performanceFromCOA.availableNum,
            rsvStartDate: params.performanceFromCOA.rsvStartDate,
            rsvEndDate: params.performanceFromCOA.rsvEndDate,
            flgEarlyBooking: params.performanceFromCOA.flgEarlyBooking
        }
    });
}
exports.createFromCOA = createFromCOA;
/**
 * create id by COA infos.
 * @export
 * @function
 * @memberof factory/event/individualScreeningEvent
 */
function createIdFromCOA(args) {
    return [
        args.screeningEvent.identifier,
        args.dateJouei,
        args.screenCode,
        args.timeBegin
    ].join('');
}
exports.createIdFromCOA = createIdFromCOA;
