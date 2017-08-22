/**
 * sskts-factory
 *
 * @module
 */

import * as mongoose from 'mongoose';

import * as GMOAuthorizationFactory from './factory/authorization/gmo';
import * as MvtkAuthorizationFactory from './factory/authorization/mvtk';
import * as seatReservationAuthorizationFactory from './factory/authorization/seatReservation';
import AuthorizationGroup from './factory/authorizationGroup';
import * as GMOCardFactory from './factory/card/gmo';
import CardGroup from './factory/cardGroup';
import * as GMOCardIdFactory from './factory/cardId/gmo';
import * as ClientFactory from './factory/client';
import * as ClientEventFactory from './factory/clientEvent';
import * as ClientUserFactory from './factory/clientUser';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as IndividualScreeningEventFactory from './factory/event/individualScreeningEvent';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import EventType from './factory/eventType';
import IMultilingualString from './factory/multilingualString';
import * as EmailNotificationFactory from './factory/notification/email';
import NotificationGroup from './factory/notificationGroup';
import * as OrderFactory from './factory/order';
import * as OrderInquiryKeyFactory from './factory/orderInquiryKey';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as MovieTheaterOrganizationFactory from './factory/organization/movieTheater';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as PersonFactory from './factory/person';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import ReservationStatusType from './factory/reservationStatusType';
import * as PerformanceStockStatusFactory from './factory/stockStatus/performance';
import * as TaskFactory from './factory/task';
import * as CancelGMOTaskFactory from './factory/task/cancelGMO';
import * as CancelMvtkTaskFactory from './factory/task/cancelMvtk';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as CreateOrderTaskFactory from './factory/task/createOrder';
import * as SendEmailNotificationTaskFactory from './factory/task/sendEmailNotification';
import * as SettleGMOTaskFactory from './factory/task/settleGMO';
import * as SettleMvtkTaskFactory from './factory/task/settleMvtk';
import * as SettleSeatReservationTaskFactory from './factory/task/settleSeatReservation';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as TransactionScopeFactory from './factory/transactionScope';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

(<any>mongoose).Promise = global.Promise;

export namespace authorization {
    export import gmo = GMOAuthorizationFactory;
    export import mvtk = MvtkAuthorizationFactory;
    export import seatReservation = seatReservationAuthorizationFactory;
}
export import authorizationGroup = AuthorizationGroup;
export namespace card {
    export import gmo = GMOCardFactory;
}
export namespace cardId {
    export import gmo = GMOCardIdFactory;
}
export import cardGroup = CardGroup;
export import client = ClientFactory;
export import clientEvent = ClientEventFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace notification {
    export import email = EmailNotificationFactory;
}
export namespace event {
    export import individualScreeningEvent = IndividualScreeningEventFactory;
    export import screeningEvent = ScreeningEventFactory;
}
export import eventType = EventType;
export type multilingualString = IMultilingualString;
export import notificationGroup = NotificationGroup;
export import order = OrderFactory;
export import orderInquiryKey = OrderInquiryKeyFactory;
export namespace organization {
    export import corporation = CorporationOrganizationFactory;
    export import movieTheater = MovieTheaterOrganizationFactory;
}
export namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
}
export import person = PersonFactory;
export import placeType = PlaceType;
export import reservationStatusType = ReservationStatusType;
export namespace stockStatus {
    // tslint:disable-next-line:no-shadowed-variable
    export import performance = PerformanceStockStatusFactory;
}
export namespace task {
    export import ITask = TaskFactory.ITask;
    export import cancelGMO = CancelGMOTaskFactory;
    export import cancelMvtk = CancelMvtkTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import createOrder = CreateOrderTaskFactory;
    export import sendEmailNotification = SendEmailNotificationTaskFactory;
    export import settleGMO = SettleGMOTaskFactory;
    export import settleMvtk = SettleMvtkTaskFactory;
    export import settleSeatReservation = SettleSeatReservationTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export import placeOrder = PlaceOrderTransactionFactory;
}
export import transactionScope = TransactionScopeFactory;
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import url = URLFactory;
