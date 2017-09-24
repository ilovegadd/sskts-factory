/**
 * index spec
 * @ignore
 */

// import * as assert from 'assert';
import * as sinon from 'sinon';

let sandbox: sinon.SinonSandbox;

describe('アクセストークン発行', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('サンプルテスト', async () => {
        sandbox.verify();
    });
});
