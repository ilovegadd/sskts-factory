// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * ForbiddenError
 * @extends {SSKTSError}
 */
export default class ForbiddenError extends SSKTSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }

        super(ErrorCode.Forbidden, actualMessage);

        setPrototypeOf(this, ForbiddenError.prototype);
    }
}
