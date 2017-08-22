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
import * as IndividualScreeningEventFactory from './factory/event/individualScreeningEvent';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import EventType from './factory/eventType';
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
import ReservationStatusType from './factory/reservationStatusType';
import * as PerformanceStockStatusFactory from './factory/stockStatus/performance';
import * as TaskFactory from './factory/task';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as TransactionScopeFactory from './factory/transactionScope';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';
export declare namespace authorization {
    export import gmo = GMOAuthorizationFactory;
    export import mvtk = MvtkAuthorizationFactory;
    export import seatReservation = seatReservationAuthorizationFactory;
}
export import authorizationGroup = AuthorizationGroup;
export declare namespace card {
    export import gmo = GMOCardFactory;
}
export declare namespace cardId {
    export import gmo = GMOCardIdFactory;
}
export import cardGroup = CardGroup;
export import client = ClientFactory;
export import clientEvent = ClientEventFactory;
export import clientUser = ClientUserFactory;
export declare namespace notification {
    export import email = EmailNotificationFactory;
}
export declare namespace event {
    export import individualScreeningEvent = IndividualScreeningEventFactory;
    export import screeningEvent = ScreeningEventFactory;
}
export import eventType = EventType;
export import notificationGroup = NotificationGroup;
export import order = OrderFactory;
export import orderInquiryKey = OrderInquiryKeyFactory;
export declare namespace organization {
    export import corporation = CorporationOrganizationFactory;
    export import movieTheater = MovieTheaterOrganizationFactory;
}
export declare namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export declare namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
}
export import person = PersonFactory;
export import reservationStatusType = ReservationStatusType;
export declare namespace stockStatus {
    export import performance = PerformanceStockStatusFactory;
}
export import task = TaskFactory;
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export declare namespace transaction {
    export import placeOrder = PlaceOrderTransactionFactory;
}
export import transactionScope = TransactionScopeFactory;
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import url = URLFactory;
