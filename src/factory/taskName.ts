/**
 * task name
 * タスク名
 */

enum TaskName {
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * ムビチケ承認アクション取消
     */
    CancelMvtk = 'cancelMvtk',
    /**
     * Pecorino口座承認アクション取消
     */
    CancelPecorino = 'cancelPecorino',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * ムビチケ使用
     */
    UseMvtk = 'useMvtk',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * Pecorino賞金返却
     */
    ReturnPecorinoAward = 'returnPecorinoAward',
    /**
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * Pecorino支払
     */
    PayPecorino = 'payPecorino',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * Pecorino返金
     */
    RefundPecorino = 'refundPecorino',
    /**
     * Pecorinoインセンティブ付与
     */
    GivePecorinoAward = 'givePecorinoAward'
}

export default TaskName;
