import ErrorCode from '../errorCode';
import { SSKTSError } from './sskts';

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
            message = `Not Found: ${entityName}`;
        }

        super(ErrorCode.NotFound, message);

        this.entityName = entityName;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
