import * as util from 'util';

import SSKTSFactoryError from '../error';
import ErrorCode from '../errorCode';

/**
 * ArgumentError
 *
 * @class ArgumentError
 * @extends {SSKTSFactoryError}
 */
export default class ArgumentError extends SSKTSFactoryError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            message = util.format('Invalid or missing argument supplied: %s', argumentName);
        }

        super(ErrorCode.Argument, message);

        this.argumentName = argumentName;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentError.prototype);
    }
}
