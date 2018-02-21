import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * ServiceUnavailableError
 * @extends {SSKTSError}
 */
export default class ServiceUnavailableError extends SSKTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Service unavailable temporarily.';
        }

        super(ErrorCode.ServiceUnavailable, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
