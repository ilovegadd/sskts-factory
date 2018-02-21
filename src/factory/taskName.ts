/**
 * task name
 * タスク名
 */

enum TaskName {
    CancelSeatReservation = 'cancelSeatReservation',
    CancelCreditCard = 'cancelCreditCard',
    CancelMvtk = 'cancelMvtk',
    SendEmailNotification = 'sendEmailNotification',
    sendEmailMessage = 'sendEmailMessage',
    SettleSeatReservation = 'settleSeatReservation',
    SettleCreditCard = 'settleCreditCard',
    SettleMvtk = 'settleMvtk',
    CreateOrder = 'createOrder',
    CreateOwnershipInfos = 'createOwnershipInfos',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder'
}

export default TaskName;
