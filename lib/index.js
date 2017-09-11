"use strict";
// tslint:disable:max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sskts-factory
 * @module
 */
const ActionFactory = require("./factory/action");
const AuthorizeActionFactory = require("./factory/action/authorize");
const CreditCardAuthorizeActionFactory = require("./factory/action/authorize/creditCard");
const MvtkAuthorizeActionFactory = require("./factory/action/authorize/mvtk");
const seatReservationAuthorizeActionFactory = require("./factory/action/authorize/seatReservation");
const ClientEventFactory = require("./factory/clientEvent");
const ClientUserFactory = require("./factory/clientUser");
const MovieCreativeWorkFactory = require("./factory/creativeWork/movie");
const creativeWorkType_1 = require("./factory/creativeWorkType");
const IndividualScreeningEventFactory = require("./factory/event/individualScreeningEvent");
const ScreeningEventFactory = require("./factory/event/screeningEvent");
const eventType_1 = require("./factory/eventType");
const EmailNotificationFactory = require("./factory/notification/email");
const notificationGroup_1 = require("./factory/notificationGroup");
const OfferFactory = require("./factory/offer");
const OrderFactory = require("./factory/order");
const orderStatus_1 = require("./factory/orderStatus");
const CorporationOrganizationFactory = require("./factory/organization/corporation");
const MovieTheaterOrganizationFactory = require("./factory/organization/movieTheater");
const corporation_1 = require("./factory/organizationIdentifier/corporation");
const organizationType_1 = require("./factory/organizationType");
const OwnershipInfoFactory = require("./factory/ownershipInfo");
const CreditCardFactory = require("./factory/paymentMethod/paymentCard/creditCard");
const PersonFactory = require("./factory/person");
const MovieTheaterPlaceFactory = require("./factory/place/movieTheater");
const placeType_1 = require("./factory/placeType");
const priceCurrency_1 = require("./factory/priceCurrency");
const EventReservationFactory = require("./factory/reservation/event");
const reservationStatusType_1 = require("./factory/reservationStatusType");
const CancelCreditCardTaskFactory = require("./factory/task/cancelCreditCard");
const CancelMvtkTaskFactory = require("./factory/task/cancelMvtk");
const CancelSeatReservationTaskFactory = require("./factory/task/cancelSeatReservation");
const CreateOrderTaskFactory = require("./factory/task/createOrder");
const CreateOwnershipInfosTaskFactory = require("./factory/task/createOwnershipInfos");
const SendEmailNotificationTaskFactory = require("./factory/task/sendEmailNotification");
const SettleCreditCardTaskFactory = require("./factory/task/settleCreditCard");
const SettleMvtkTaskFactory = require("./factory/task/settleMvtk");
const SettleSeatReservationTaskFactory = require("./factory/task/settleSeatReservation");
const TaskExecutionResultFactory = require("./factory/taskExecutionResult");
const taskName_1 = require("./factory/taskName");
const taskStatus_1 = require("./factory/taskStatus");
const PlaceOrderTransactionFactory = require("./factory/transaction/placeOrder");
const TransactionScopeFactory = require("./factory/transactionScope");
const transactionStatusType_1 = require("./factory/transactionStatusType");
const transactionTasksExportationStatus_1 = require("./factory/transactionTasksExportationStatus");
const transactionType_1 = require("./factory/transactionType");
const URLFactory = require("./factory/url");
const errorCode_1 = require("./errorCode");
const errors = require("./errors");
exports.errors = errors;
exports.errorCode = errorCode_1.default;
exports.actionStatusType = ActionFactory.ActionStatusType;
exports.actionType = ActionFactory.ActionType;
var action;
(function (action) {
    let authorize;
    (function (authorize) {
        authorize.authorizeActionPurpose = AuthorizeActionFactory.AuthorizeActionPurpose;
        authorize.creditCard = CreditCardAuthorizeActionFactory;
        authorize.mvtk = MvtkAuthorizeActionFactory;
        authorize.seatReservation = seatReservationAuthorizeActionFactory;
    })(authorize = action.authorize || (action.authorize = {}));
})(action = exports.action || (exports.action = {}));
var paymentMethod;
(function (paymentMethod) {
    let paymentCard;
    (function (paymentCard) {
        paymentCard.creditCard = CreditCardFactory;
    })(paymentCard = paymentMethod.paymentCard || (paymentMethod.paymentCard = {}));
})(paymentMethod = exports.paymentMethod || (exports.paymentMethod = {}));
exports.clientEvent = ClientEventFactory;
exports.clientUser = ClientUserFactory;
var creativeWork;
(function (creativeWork) {
    creativeWork.movie = MovieCreativeWorkFactory;
})(creativeWork = exports.creativeWork || (exports.creativeWork = {}));
exports.creativeWorkType = creativeWorkType_1.default;
var notification;
(function (notification) {
    notification.email = EmailNotificationFactory;
})(notification = exports.notification || (exports.notification = {}));
var event;
(function (event) {
    event.individualScreeningEvent = IndividualScreeningEventFactory;
    event.screeningEvent = ScreeningEventFactory;
})(event = exports.event || (exports.event = {}));
exports.eventType = eventType_1.default;
exports.notificationGroup = notificationGroup_1.default;
exports.offer = OfferFactory;
exports.order = OrderFactory;
exports.orderStatus = orderStatus_1.default;
var organization;
(function (organization) {
    organization.corporation = CorporationOrganizationFactory;
    organization.movieTheater = MovieTheaterOrganizationFactory;
})(organization = exports.organization || (exports.organization = {}));
var organizationIdentifier;
(function (organizationIdentifier) {
    organizationIdentifier.corporation = corporation_1.default;
})(organizationIdentifier = exports.organizationIdentifier || (exports.organizationIdentifier = {}));
exports.organizationType = organizationType_1.default;
exports.ownershipInfo = OwnershipInfoFactory;
exports.priceCurrency = priceCurrency_1.default;
var place;
(function (place) {
    place.movieTheater = MovieTheaterPlaceFactory;
})(place = exports.place || (exports.place = {}));
exports.person = PersonFactory;
exports.placeType = placeType_1.default;
var reservation;
(function (reservation) {
    // tslint:disable-next-line:no-shadowed-variable
    reservation.event = EventReservationFactory;
})(reservation = exports.reservation || (exports.reservation = {}));
exports.reservationStatusType = reservationStatusType_1.default;
var task;
(function (task) {
    task.cancelCreditCard = CancelCreditCardTaskFactory;
    task.cancelMvtk = CancelMvtkTaskFactory;
    task.cancelSeatReservation = CancelSeatReservationTaskFactory;
    task.createOrder = CreateOrderTaskFactory;
    task.createOwnershipInfos = CreateOwnershipInfosTaskFactory;
    task.sendEmailNotification = SendEmailNotificationTaskFactory;
    task.settleCreditCard = SettleCreditCardTaskFactory;
    task.settleMvtk = SettleMvtkTaskFactory;
    task.settleSeatReservation = SettleSeatReservationTaskFactory;
})(task = exports.task || (exports.task = {}));
exports.taskExecutionResult = TaskExecutionResultFactory;
exports.taskName = taskName_1.default;
exports.taskStatus = taskStatus_1.default;
var transaction;
(function (transaction) {
    transaction.placeOrder = PlaceOrderTransactionFactory;
})(transaction = exports.transaction || (exports.transaction = {}));
exports.transactionScope = TransactionScopeFactory;
exports.transactionStatusType = transactionStatusType_1.default;
exports.transactionTasksExportationStatus = transactionTasksExportationStatus_1.default;
exports.transactionType = transactionType_1.default;
exports.url = URLFactory;
