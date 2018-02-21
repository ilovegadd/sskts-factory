import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * NotImplementedError
 * @extends {SSKTSError}
 */
export default class NotImplementedError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Method is not yet implemented.';
        }

        super(ErrorCode.NotImplemented, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
