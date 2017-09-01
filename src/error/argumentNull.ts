import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {SSKTSError}
 */
export default class ArgumentNullError extends SSKTSError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            message = `Missing argument: ${argumentName}`;
        }

        super(ErrorCode.ArgumentNull, message);

        this.argumentName = argumentName;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
