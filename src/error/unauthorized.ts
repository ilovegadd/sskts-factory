import { SSKTSError } from '../error';
import ErrorCode from '../errorCode';

/**
 * UnauthorizedError
 *
 * @class UnauthorizedError
 * @extends {SSKTSError}
 */
export default class UnauthorizedError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            message = 'Unauthorized';
        }

        super(ErrorCode.Unauthorized, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
