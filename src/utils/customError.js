class CustomError extends Error {

	message;
	statusCode;
	constructor(message, statusCode)
	{
		super()
		this.message = message;
		this.statusCode = statusCode;
	}
}

export {CustomError};