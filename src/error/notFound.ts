import * as util from 'util';

import { SSKTSError } from '../error';
import ErrorCode from '../errorCode';

/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {SSKTSError}
 */
export default class NotFoundError extends SSKTSError {
    public readonly entityName: string;

    constructor(entityName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            message = util.format('Not Found: "%s"', entityName);
        }

        super(ErrorCode.NotFound, message);

        this.entityName = entityName;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
