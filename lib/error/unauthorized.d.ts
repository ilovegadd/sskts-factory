import { SSKTSError } from './sskts';
/**
 * UnauthorizedError
 *
 * @class UnauthorizedError
 * @extends {SSKTSError}
 */
export default class UnauthorizedError extends SSKTSError {
    constructor(message?: string);
}
