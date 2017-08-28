/**
 * event reservation factory
 * @namespace factory/reservation/event
 */
import * as COA from '@motionpicture/coa-service';
import { IEvent } from '../event';
import { IReservation } from '../reservation';
import * as IndividualScreeningEventFactory from '../event/individualScreeningEvent';
import { ISeatReservationOffer } from '../offer';
export interface IEventReservation<T extends IEvent> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
export declare function createFromCOATmpReserve(params: {
    reserveSeatsTemporarilyResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[];
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
}): IEventReservation<IndividualScreeningEventFactory.IEvent>[];
