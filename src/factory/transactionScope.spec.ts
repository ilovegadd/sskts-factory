// tslint:disable:no-implicit-dependencies

/**
 * transactionScope test
 * @ignore
 */

import * as moment from 'moment';
import * as assert from 'power-assert';

import * as errors from './errors';
import * as TransactionScopeFactory from './transactionScope';

describe('transactionScope.create()', () => {
    let TEST_CREATE_PARAMS: any;

    beforeEach(() => {
        TEST_CREATE_PARAMS = {
            readyFrom: moment().toDate(),
            readyThrough: moment().add(1, 'second').toDate(),
            client: '',
            theater: ''
        };
    });

    it('作成できる', () => {
        assert.doesNotThrow(() => {
            TransactionScopeFactory.create(TEST_CREATE_PARAMS);
        });
    });

    it('readyFromがDateでなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.readyFrom = {};
                TransactionScopeFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });

    it('readyThroughがDateでなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.readyThrough = {};
                TransactionScopeFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });

    it('readyThroughがreadyFromより早ければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.readyFrom = moment().toDate();
                TEST_CREATE_PARAMS.readyThrough = moment().add(-1, 'second').toDate();
                TransactionScopeFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });
});

describe('transactionScope.scope2String()', () => {
    it('文字列に変換できるはず', () => {
        const scope = {
            readyFrom: moment().toDate(),
            readyThrough: moment().add(1, 'second').toDate(),
            client: '',
            theater: ''
        };

        const result = TransactionScopeFactory.scope2String(scope);
        assert(typeof result, 'string');
    });
});
