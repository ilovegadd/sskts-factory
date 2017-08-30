import ErrorCode from './errorCode';

/**
 * SSKTSError
 *
 * @class SSKTSError
 * @extends {Error}
 */
export class SSKTSError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);

        this.name = 'SSKTSError';
        this.reason = code;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, SSKTSError.prototype);
    }
}
