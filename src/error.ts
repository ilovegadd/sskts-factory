/**
 * SSKTSFactoryError
 *
 * @class SSKTSFactoryError
 * @extends {Error}
 */
export default class SSKTSFactoryError extends Error {
    public readonly code: string;

    constructor(code: string, message?: string) {
        super(message);

        this.name = 'SSKTSFactoryError';
        this.code = code;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, SSKTSFactoryError.prototype);
    }
}
