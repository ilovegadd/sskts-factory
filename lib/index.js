"use strict";
/**
 * sskts-factory
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const GMOAuthorizationFactory = require("./factory/authorization/gmo");
const MvtkAuthorizationFactory = require("./factory/authorization/mvtk");
const seatReservationAuthorizationFactory = require("./factory/authorization/seatReservation");
const authorizationGroup_1 = require("./factory/authorizationGroup");
const ClientFactory = require("./factory/client");
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
const CorporationOrganizationFactory = require("./factory/organization/corporation");
const MovieTheaterOrganizationFactory = require("./factory/organization/movieTheater");
const corporation_1 = require("./factory/organizationIdentifier/corporation");
const organizationType_1 = require("./factory/organizationType");
const OwnershipInfoFactory = require("./factory/ownershipInfo");
const CreditCardFactory = require("./factory/paymentMethod/paymentCard/creditCard");
const PersonFactory = require("./factory/person");
const MovieTheaterPlaceFactory = require("./factory/place/movieTheater");
const placeType_1 = require("./factory/placeType");
const ReservationFactory = require("./factory/reservation");
const reservationStatusType_1 = require("./factory/reservationStatusType");
const CancelGMOTaskFactory = require("./factory/task/cancelGMO");
const CancelMvtkTaskFactory = require("./factory/task/cancelMvtk");
const CancelSeatReservationTaskFactory = require("./factory/task/cancelSeatReservation");
const CreateOrderTaskFactory = require("./factory/task/createOrder");
const SendEmailNotificationTaskFactory = require("./factory/task/sendEmailNotification");
const SettleGMOTaskFactory = require("./factory/task/settleGMO");
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
mongoose.Promise = global.Promise;
var authorization;
(function (authorization) {
    authorization.gmo = GMOAuthorizationFactory;
    authorization.mvtk = MvtkAuthorizationFactory;
    authorization.seatReservation = seatReservationAuthorizationFactory;
})(authorization = exports.authorization || (exports.authorization = {}));
exports.authorizationGroup = authorizationGroup_1.default;
var paymentMethod;
(function (paymentMethod) {
    let paymentCard;
    (function (paymentCard) {
        paymentCard.creditCard = CreditCardFactory;
    })(paymentCard = paymentMethod.paymentCard || (paymentMethod.paymentCard = {}));
})(paymentMethod = exports.paymentMethod || (exports.paymentMethod = {}));
exports.client = ClientFactory;
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
var place;
(function (place) {
    place.movieTheater = MovieTheaterPlaceFactory;
})(place = exports.place || (exports.place = {}));
exports.person = PersonFactory;
exports.placeType = placeType_1.default;
exports.reservation = ReservationFactory;
exports.reservationStatusType = reservationStatusType_1.default;
var task;
(function (task) {
    task.cancelGMO = CancelGMOTaskFactory;
    task.cancelMvtk = CancelMvtkTaskFactory;
    task.cancelSeatReservation = CancelSeatReservationTaskFactory;
    task.createOrder = CreateOrderTaskFactory;
    task.sendEmailNotification = SendEmailNotificationTaskFactory;
    task.settleGMO = SettleGMOTaskFactory;
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
