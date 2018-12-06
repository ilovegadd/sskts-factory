/**
 * factory
 */
import * as pecorino from '@pecorino/factory';

import * as cognito from './cognito';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as PecorinoAwardAuthorizeActionFactory from './factory/action/authorize/award/pecorino';
import * as MvtkAuthorizeActionFactory from './factory/action/authorize/discount/mvtk';
import * as ProgramMembershipOfferAuthorizeActionFactory from './factory/action/authorize/offer/programMembership';
import * as SeatReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/seatReservation';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/paymentMethod/creditCard';
import * as PecorinoAuthorizeActionFactory from './factory/action/authorize/paymentMethod/pecorino';
import * as UseMvtkActionFactory from './factory/action/consume/use/mvtk';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as GivePecorinoAwardActionFactory from './factory/action/transfer/give/pecorinoAward';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPecorinoAwardActionFactory from './factory/action/transfer/return/pecorinoAward';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import AccountType from './factory/accountType';
import * as ClientEventFactory from './factory/clientEvent';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as IndividualScreeningEventFactory from './factory/event/individualScreeningEvent';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as MovieTheaterOrganizationFactory from './factory/organization/movieTheater';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as EventReservationFactory from './factory/reservation/event';
import { ReservationStatusType } from './factory/reservationStatusType';
import ReservationType from './factory/reservationType';
import SortType from './factory/sortType';
import { UnitCode } from './factory/unitCode';

import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelMvtkTaskFactory from './factory/task/cancelMvtk';
import * as CancelPecorinoTaskFactory from './factory/task/cancelPecorino';
import * as CancelPecorinoAwardTaskFactory from './factory/task/cancelPecorinoAward';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as GivePecorinoAwardTaskFactory from './factory/task/givePecorinoAward';
import * as PayCreditCardTaskFactory from './factory/task/payCreditCard';
import * as PayPecorinoTaskFactory from './factory/task/payPecorino';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundCreditCardTaskFactory from './factory/task/refundCreditCard';
import * as RefundPecorinoTaskFactory from './factory/task/refundPecorino';
import * as RegisterProgramMembershipTaskFactory from './factory/task/registerProgramMembership';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPecorinoAwardTaskFactory from './factory/task/returnPecorinoAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';
import * as UseMvtkTaskFactory from './factory/task/useMvtk';

import * as TaskFactory from './factory/task';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import cognito = cognito;
export import pecorino = pecorino;
export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace award {
            // tslint:disable-next-line:no-shadowed-variable
            export import pecorino = PecorinoAwardAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import creditCard = CreditCardAuthorizeActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import pecorino = PecorinoAuthorizeActionFactory;
        }
        export namespace discount {
            export import mvtk = MvtkAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = ProgramMembershipOfferAuthorizeActionFactory;
            export import seatReservation = SeatReservationOfferAuthorizeActionFactory;
        }
    }

    export namespace interact {
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = RegisterProgramMembershipActionFactory;
        }
        export namespace unRegister {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = UnRegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = UnRegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = UnRegisterProgramMembershipActionFactory;
        }
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export namespace give {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = GiveActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = GiveActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import pecorinoAward = GivePecorinoAwardActionFactory;
        }

        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
            export import pecorinoAward = ReturnPecorinoAwardActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace consume {
        export namespace use {
            export import mvtk = UseMvtkActionFactory;
        }
    }
}

export import accountType = AccountType;
export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
export import clientEvent = ClientEventFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export import individualScreeningEvent = IndividualScreeningEventFactory;
    export import screeningEvent = ScreeningEventFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import OfferType = OfferFactory.OfferType;
    export import IOffer = OfferFactory.IOffer;
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export namespace organization {
    export import IOrganization = OrganizationFactory.IOrganization;
    export import IPaymentAccepted = OrganizationFactory.IPaymentAccepted;
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
export import paymentMethodType = PaymentMethodType;
export import person = PersonFactory;
export import personType = PersonType;
export import placeType = PlaceType;
export import programMembership = ProgramMembershipFactory;
export import propertyValue = PropertyValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace reservation {
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export import reservationType = ReservationType;
export namespace task {
    export type IData<T extends TaskName> =
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IData :
        T extends TaskName.CancelMvtk ? CancelMvtkTaskFactory.IData :
        T extends TaskName.CancelPecorino ? CancelPecorinoTaskFactory.IData :
        T extends TaskName.CancelPecorinoAward ? CancelPecorinoAwardTaskFactory.IData :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IData :
        T extends TaskName.GivePecorinoAward ? GivePecorinoAwardTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IData :
        T extends TaskName.RefundPecorino ? RefundPecorinoTaskFactory.IData :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPecorinoAward ? ReturnPecorinoAwardTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IData :
        T extends TaskName.PayPecorino ? PayPecorinoTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.UseMvtk ? UseMvtkTaskFactory.IData :
        TaskFactory.IData;
    export type IAttributes<T extends TaskName> =
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IAttributes :
        T extends TaskName.CancelMvtk ? CancelMvtkTaskFactory.IAttributes :
        T extends TaskName.CancelPecorino ? CancelPecorinoTaskFactory.IAttributes :
        T extends TaskName.CancelPecorinoAward ? CancelPecorinoAwardTaskFactory.IAttributes :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IAttributes :
        T extends TaskName.GivePecorinoAward ? GivePecorinoAwardTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IAttributes :
        T extends TaskName.RefundPecorino ? RefundPecorinoTaskFactory.IAttributes :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPecorinoAward ? ReturnPecorinoAwardTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IAttributes :
        T extends TaskName.PayPecorino ? PayPecorinoTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.UseMvtk ? UseMvtkTaskFactory.IAttributes :
        TaskFactory.IAttributes;
    export type ITask<T extends TaskName> =
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.ITask :
        T extends TaskName.CancelMvtk ? CancelMvtkTaskFactory.ITask :
        T extends TaskName.CancelPecorino ? CancelPecorinoTaskFactory.ITask :
        T extends TaskName.CancelPecorinoAward ? CancelPecorinoAwardTaskFactory.ITask :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.ITask :
        T extends TaskName.GivePecorinoAward ? GivePecorinoAwardTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.ITask :
        T extends TaskName.RefundPecorino ? RefundPecorinoTaskFactory.ITask :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPecorinoAward ? ReturnPecorinoAwardTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.ITask :
        T extends TaskName.PayPecorino ? PayPecorinoTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.UseMvtk ? UseMvtkTaskFactory.ITask :
        TaskFactory.ITask;
    export type ISearchConditions<T extends TaskName> = TaskFactory.ISearchConditions<T>;
    export import cancelCreditCard = CancelCreditCardTaskFactory;
    export import cancelMvtk = CancelMvtkTaskFactory;
    export import cancelPecorino = CancelPecorinoTaskFactory;
    export import cancelPecorinoAward = CancelPecorinoAwardTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import givePecorinoAward = GivePecorinoAwardTaskFactory;
    export import placeOrder = PlaceOrderTaskFactory;
    export import refundCreditCard = RefundCreditCardTaskFactory;
    export import refundPecorino = RefundPecorinoTaskFactory;
    export import registerProgramMembership = RegisterProgramMembershipTaskFactory;
    export import returnOrder = ReturnOrderTaskFactory;
    export import returnPecorinoAward = ReturnPecorinoAwardTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
    export import sendOrder = SendOrderTaskFactory;
    export import payCreditCard = PayCreditCardTaskFactory;
    export import payPecorino = PayPecorinoTaskFactory;
    export import triggerWebhook = TriggerWebhookTaskFactory;
    export import unRegisterProgramMembership = UnRegisterProgramMembershipTaskFactory;
    export import useMvtk = UseMvtkTaskFactory;
}
export import sortType = SortType;
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
export import url = URLFactory;
