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

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.RateLimitExceeded, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
