/**
 * a sample creating a transaction
 *
 * @ignore
 */

const factory = require('../lib/index');

const transaction = factory.transaction.placeOrder.create({
    status: factory.transactionStatusType.InProgress,
    expires: new Date()
});

console.log('transaction:', transaction);
