/**
 * task name
 * タスク名
 * @namespace taskName
 */

enum TaskName {
    CancelSeatReservation = 'cancelSeatReservation',
    CancelCreditCard = 'cancelCreditCard',
    CancelMvtk = 'cancelMvtk',
    SendEmailNotification = 'sendEmailNotification',
    SettleSeatReservation = 'settleSeatReservation',
    SettleCreditCard = 'settleCreditCard',
    SettleMvtk = 'settleMvtk',
    CreateOrder = 'createOrder',
    CreateOwnershipInfos = 'createOwnershipInfos',
    /**
     * クレジットカード売上取消
     */
    ReturnCreditCardSales = 'returnCreditCardSales',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder'
}

export default TaskName;
