"use strict";
/**
 * イベントファクトリー
 *
 * @namespace event
 */
Object.defineProperty(exports, "__esModule", { value: true });
function create(params) {
    return {
        identifier: params.identifier,
        name: (params.name === undefined) ? { ja: '', en: '' } : params.name,
        description: params.description,
        doorTime: params.doorTime,
        duration: (params.duration === undefined) ? undefined : params.duration.toString(),
        endDate: params.endDate,
        eventStatus: params.eventStatus,
        location: params.location,
        startDate: params.startDate,
        workPerformed: params.workPerformed,
        maximumAttendeeCapacity: params.maximumAttendeeCapacity,
        // offers: params.offers,
        remainingAttendeeCapacity: params.remainingAttendeeCapacity,
        typeOf: params.typeOf
    };
}
exports.create = create;
