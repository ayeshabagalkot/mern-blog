export const errorHandler = (ststusCode, message) => {

    const error = new Error();
    error.statusCode = ststusCode;
    error.message = message;
    return error;
};
