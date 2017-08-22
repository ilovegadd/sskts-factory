import SSKTSFactoryError from '../error';
/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {SSKTSFactoryError}
 */
export default class ArgumentNullError extends SSKTSFactoryError {
    readonly argumentName: string;
    constructor(argumentName: string, message?: string);
}
