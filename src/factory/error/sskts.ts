import ErrorCode from '../errorCode';

/**
 * SSKTSError
 * @extends {Error}
 */
export class SSKTSError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'SSKTSError';
        this.reason = code;
    }
}
