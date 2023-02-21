import {CustomError} from '../utils/index.utils.js'

function errorHandler (err, req, res, next) {
	let statusCode = 500;
	let message = "Unexpected Error !";

	if (err instanceof CustomError)
	{
		statusCode = err.statusCode;
		message = err.message;
	}
	console.log(err.stack) // in dev mode only !!
	return res.status(statusCode).send({
		message
	})
}

export default errorHandler;