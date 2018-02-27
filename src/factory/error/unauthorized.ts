// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * UnauthorizedError
 * @extends {SSKTSError}
 */
export default class UnauthorizedError extends SSKTSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }

        super(ErrorCode.Unauthorized, actualMessage);

        setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
