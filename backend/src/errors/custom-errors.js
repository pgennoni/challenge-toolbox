export class ClientRequestUnauthorizedError extends Error {
  constructor(code, message, details, success) {
    super(message);
    this.code = code;
    this.message = message;
    this.details = details;
    this.success = success;
  }
}
export class NotFoundError extends Error {
  constructor(code, message, details, success) {
    super(message);
    this.code = code;
    this.message = message;
    this.details = details;
    this.success = success;
  }
}
export default {
  ClientRequestUnauthorizedError,
  NotFoundError,
};
