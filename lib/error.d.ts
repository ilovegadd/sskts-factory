import ErrorCode from './errorCode';
/**
 * SSKTSError
 *
 * @class SSKTSError
 * @extends {Error}
 */
export declare class SSKTSError extends Error {
    readonly reason: ErrorCode;
    constructor(code: ErrorCode, message?: string);
}
