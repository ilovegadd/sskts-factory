import { SSKTSError } from './sskts';
/**
 * ServiceUnavailableError
 *
 * @class ServiceUnavailableError
 * @extends {SSKTSError}
 */
export default class ServiceUnavailableError extends SSKTSError {
    constructor(message?: string);
}
