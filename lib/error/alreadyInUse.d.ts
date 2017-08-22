import SSKTSFactoryError from '../error';
/**
 * AlreadyInUseError
 *
 * @class AlreadyInUseError
 * @extends {SSKTSFactoryError}
 */
export default class AlreadyInUseError extends SSKTSFactoryError {
    readonly entityName: string;
    readonly fieldNames: string[];
    constructor(entityName: string, fieldNames: string[], message?: string);
}
