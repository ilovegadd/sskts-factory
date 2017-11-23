/**
 * errors
 * @namespace errors
 */

import AlreadyInUseError from './error/alreadyInUse';
import ArgumentError from './error/argument';
import ArgumentNullError from './error/argumentNull';
import ForbiddenError from './error/forbidden';
import NotFoundError from './error/notFound';
import NotImplementedError from './error/notImplemented';
import RateLimitExceededError from './error/rateLimitExceeded';
import ServiceUnavailableError from './error/serviceUnavailable';
import { SSKTSError } from './error/sskts';
import UnauthorizedError from './error/unauthorized';

export {
    AlreadyInUseError as AlreadyInUse,
    ArgumentError as Argument,
    ArgumentNullError as ArgumentNull,
    ForbiddenError as Forbidden,
    NotFoundError as NotFound,
    NotImplementedError as NotImplemented,
    RateLimitExceededError as RateLimitExceeded,
    ServiceUnavailableError as ServiceUnavailable,
    SSKTSError as SSKTS,
    UnauthorizedError as Unauthorized
};
