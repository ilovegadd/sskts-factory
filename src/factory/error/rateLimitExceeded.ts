// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * RateLimitExceededError
 * @extends {SSKTSError}
 */
export default class RateLimitExceededError extends SSKTSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        super(ErrorCode.RateLimitExceeded, actualMessage);

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
