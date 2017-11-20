import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * RateLimitExceededError
 * @class RateLimitExceededError
 * @extends {SSKTSError}
 */
export default class RateLimitExceededError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            message = 'Rate limit exceeded.';
        }

        super(ErrorCode.RateLimitExceeded, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
