// tslint:disable:max-classes-per-file

/**
 * sskts-factory
 * @module
 */

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/creditCard';
import * as MvtkAuthorizeActionFactory from './factory/action/authorize/mvtk';
import * as seatReservationAuthorizeActionFactory from './factory/action/authorize/seatReservation';
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
import * as OfferFactory from './factory/offer';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as MovieTheaterOrganizationFactory from './factory/organization/movieTheater';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import * as PersonFactory from './factory/person';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as EventReservationFactory from './factory/reservation/event';
import ReservationStatusType from './factory/reservationStatusType';
import * as TaskFactory from './factory/task';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelMvtkTaskFactory from './factory/task/cancelMvtk';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as CreateOrderTaskFactory from './factory/task/createOrder';
import * as CreateOwnershipInfosTaskFactory from './factory/task/createOwnershipInfos';
import * as SendEmailNotificationTaskFactory from './factory/task/sendEmailNotification';
import * as SettleCreditCardTaskFactory from './factory/task/settleCreditCard';
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

import ErrorCode from './errorCode';
import * as errors from './errors';

export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = ActionFactory.ActionStatusType;
export import actionType = ActionFactory.ActionType;
export namespace action {
    export namespace authorize {
        export import IAction = AuthorizeActionFactory.IAction;
        export import authorizeActionPurpose = AuthorizeActionFactory.AuthorizeActionPurpose;
        export import creditCard = CreditCardAuthorizeActionFactory;
        export import mvtk = MvtkAuthorizeActionFactory;
        export import seatReservation = seatReservationAuthorizeActionFactory;
    }
}

export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
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
export import offer = OfferFactory;
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export namespace organization {
    export import corporation = CorporationOrganizationFactory;
    export import movieTheater = MovieTheaterOrganizationFactory;
}
export namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = PriceCurrency;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
}
export import person = PersonFactory;
export import placeType = PlaceType;
export namespace reservation {
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import cancelCreditCard = CancelCreditCardTaskFactory;
    export import cancelMvtk = CancelMvtkTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import createOrder = CreateOrderTaskFactory;
    export import createOwnershipInfos = CreateOwnershipInfosTaskFactory;
    export import sendEmailNotification = SendEmailNotificationTaskFactory;
    export import settleCreditCard = SettleCreditCardTaskFactory;
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
