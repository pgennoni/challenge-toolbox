class ErrorResponse {
  constructor({ code, message, details, success }) {
    this.code = code;
    this.message = message;
    this.details = details;
    this.success = success;
  }
}

const errorHandler = (err, req, res, next) => {
  res
    .status(err.code || 500)
    .send(
      new ErrorResponse({
        code: err.code,
        message: err.message,
        details: err.message,
        success: err.success,
      }),
    )
    .end();
};
export default errorHandler;
