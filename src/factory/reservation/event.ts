import { IEvent } from '../event';
import { IReservation } from '../reservation';

/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IEventReservation<T extends IEvent> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
