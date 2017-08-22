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
const GMOCardFactory = require("./factory/card/gmo");
const cardGroup_1 = require("./factory/cardGroup");
const GMOCardIdFactory = require("./factory/cardId/gmo");
const ClientFactory = require("./factory/client");
const ClientEventFactory = require("./factory/clientEvent");
const ClientUserFactory = require("./factory/clientUser");
const IndividualScreeningEventFactory = require("./factory/event/individualScreeningEvent");
const ScreeningEventFactory = require("./factory/event/screeningEvent");
const eventType_1 = require("./factory/eventType");
const EmailNotificationFactory = require("./factory/notification/email");
const notificationGroup_1 = require("./factory/notificationGroup");
const OrderFactory = require("./factory/order");
const OrderInquiryKeyFactory = require("./factory/orderInquiryKey");
const CorporationOrganizationFactory = require("./factory/organization/corporation");
const MovieTheaterOrganizationFactory = require("./factory/organization/movieTheater");
const corporation_1 = require("./factory/organizationIdentifier/corporation");
const organizationType_1 = require("./factory/organizationType");
const PersonFactory = require("./factory/person");
const MovieTheaterPlaceFactory = require("./factory/place/movieTheater");
const reservationStatusType_1 = require("./factory/reservationStatusType");
const PerformanceStockStatusFactory = require("./factory/stockStatus/performance");
const TaskFactory = require("./factory/task");
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
var card;
(function (card) {
    card.gmo = GMOCardFactory;
})(card = exports.card || (exports.card = {}));
var cardId;
(function (cardId) {
    cardId.gmo = GMOCardIdFactory;
})(cardId = exports.cardId || (exports.cardId = {}));
exports.cardGroup = cardGroup_1.default;
exports.client = ClientFactory;
exports.clientEvent = ClientEventFactory;
exports.clientUser = ClientUserFactory;
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
exports.order = OrderFactory;
exports.orderInquiryKey = OrderInquiryKeyFactory;
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
var place;
(function (place) {
    place.movieTheater = MovieTheaterPlaceFactory;
})(place = exports.place || (exports.place = {}));
exports.person = PersonFactory;
exports.reservationStatusType = reservationStatusType_1.default;
var stockStatus;
(function (stockStatus) {
    // tslint:disable-next-line:no-shadowed-variable
    stockStatus.performance = PerformanceStockStatusFactory;
})(stockStatus = exports.stockStatus || (exports.stockStatus = {}));
exports.task = TaskFactory;
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
