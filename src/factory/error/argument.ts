// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * ArgumentError
 * @extends {SSKTSError}
 */
export default class ArgumentError extends SSKTSError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Invalid or missing argument supplied: ${argumentName}.`;
        }

        super(ErrorCode.Argument, actualMessage);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentError.prototype);
    }
}
