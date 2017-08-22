/**
 * SSKTSFactoryError
 *
 * @class SSKTSFactoryError
 * @extends {Error}
 */
export default class SSKTSFactoryError extends Error {
    readonly code: string;
    constructor(code: string, message?: string);
}
