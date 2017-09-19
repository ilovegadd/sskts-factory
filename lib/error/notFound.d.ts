import { SSKTSError } from './sskts';
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
