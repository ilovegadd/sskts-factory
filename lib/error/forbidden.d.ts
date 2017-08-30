import { SSKTSError } from '../error';
/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {SSKTSError}
 */
export default class ForbiddenError extends SSKTSError {
    constructor(message?: string);
}
