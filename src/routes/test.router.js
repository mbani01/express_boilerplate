import express from "express";
const testRouter = express.Router();
import { CustomError } from "../utils/customError.js";

testRouter.get('/success', (req, res)=>{

	return res.json({message: "Success!"});
})

testRouter.get('/error', (req, res)=>{

	const statusCode = 403;
	const ErrorMessage = "Invalid permissions"
	// throw new Error("Invalid Permissions") // this will result an internal server error 500 with "Unexpected error" message
	throw new CustomError(ErrorMessage, statusCode) // returns the specified status code and error message as well
})


export default testRouter;