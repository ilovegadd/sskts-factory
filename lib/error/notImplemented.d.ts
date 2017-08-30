import { SSKTSError } from '../error';
/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {SSKTSError}
 */
export default class NotImplementedError extends SSKTSError {
    constructor(message?: string);
}
