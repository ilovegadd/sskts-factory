// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * ServiceUnavailableError
 * @extends {SSKTSError}
 */
export default class ServiceUnavailableError extends SSKTSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.ServiceUnavailable, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
