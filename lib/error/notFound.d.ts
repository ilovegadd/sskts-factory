import { SSKTSError } from '../error';
/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {SSKTSError}
 */
export default class NotFoundError extends SSKTSError {
    readonly entityName: string;
    constructor(entityName: string, message?: string);
}
