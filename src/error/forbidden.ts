import { SSKTSError } from '../error';
import ErrorCode from '../errorCode';

/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {SSKTSError}
 */
export default class ForbiddenError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            message = 'Forbidden';
        }

        super(ErrorCode.Forbidden, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
