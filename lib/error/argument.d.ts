import SSKTSFactoryError from '../error';
/**
 * ArgumentError
 *
 * @class ArgumentError
 * @extends {SSKTSFactoryError}
 */
export default class ArgumentError extends SSKTSFactoryError {
    readonly argumentName: string;
    constructor(argumentName: string, message?: string);
}
