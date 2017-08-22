import * as util from 'util';

import SSKTSFactoryError from '../error';
import ErrorCode from '../errorCode';

/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {SSKTSFactoryError}
 */
export default class ArgumentNullError extends SSKTSFactoryError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            message = util.format('Missing argument: %s', argumentName);
        }

        super(ErrorCode.ArgumentNull, message);

        this.argumentName = argumentName;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
