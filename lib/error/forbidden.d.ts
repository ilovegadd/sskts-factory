import { SSKTSError } from './sskts';
/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {SSKTSError}
 */
export default class ForbiddenError extends SSKTSError {
    constructor(message?: string);
}
