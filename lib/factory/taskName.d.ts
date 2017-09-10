/**
 * task name
 * タスク名
 * @namespace taskName
 */
declare enum TaskName {
    CancelSeatReservation = "cancelSeatReservation",
    CancelCreditCard = "cancelCreditCard",
    CancelMvtk = "cancelMvtk",
    SendEmailNotification = "sendEmailNotification",
    SettleSeatReservation = "settleSeatReservation",
    SettleCreditCard = "settleCreditCard",
    SettleMvtk = "settleMvtk",
    CreateOrder = "createOrder",
    CreateOwnershipInfos = "createOwnershipInfos",
}
export default TaskName;
