"use strict";
/**
 * individual screening event factory
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
function createFromCOA(performanceFromCOA) {
    return (screenRoom, screeningEvent) => {
        const identifier = createIdFromCOA({
            screeningEvent: screeningEvent,
            dateJouei: performanceFromCOA.dateJouei,
            screenCode: performanceFromCOA.screenCode,
            timeBegin: performanceFromCOA.timeBegin
        });
        return Object.assign({}, EventFactory.create({
            eventStatus: eventStatusType_1.default.EventScheduled,
            typeOf: eventType_1.default.IndividualScreeningEvent,
            identifier: identifier,
            name: screeningEvent.name
        }), {
            workPerformed: screeningEvent.workPerformed,
            location: {
                typeOf: screenRoom.typeOf,
                branchCode: screenRoom.branchCode,
                name: screenRoom.name
            },
            endDate: moment(`${performanceFromCOA.dateJouei} ${performanceFromCOA.timeEnd} +09:00`, 'YYYYMMDD HHmm Z').toDate(),
            startDate: moment(`${performanceFromCOA.dateJouei} ${performanceFromCOA.timeBegin} +09:00`, 'YYYYMMDD HHmm Z').toDate(),
            superEvent: screeningEvent,
            coaInfo: {
                theaterCode: screeningEvent.location.branchCode,
                dateJouei: performanceFromCOA.dateJouei,
                titleCode: performanceFromCOA.titleCode,
                titleBranchNum: performanceFromCOA.titleBranchNum,
                timeBegin: performanceFromCOA.timeBegin,
                screenCode: performanceFromCOA.screenCode,
                trailerTime: performanceFromCOA.trailerTime,
                kbnService: performanceFromCOA.kbnService,
                kbnAcoustic: performanceFromCOA.kbnAcoustic,
                nameServiceDay: performanceFromCOA.nameServiceDay,
                availableNum: performanceFromCOA.availableNum,
                rsvStartDate: performanceFromCOA.rsvStartDate,
                rsvEndDate: performanceFromCOA.rsvEndDate,
                flgEarlyBooking: performanceFromCOA.flgEarlyBooking
            }
        });
    };
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
