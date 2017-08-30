import { SSKTSError } from '../error';
import ErrorCode from '../errorCode';

/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {SSKTSError}
 */
export default class NotImplementedError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            message = 'Method is not yet implemented';
        }

        super(ErrorCode.NotImplemented, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
