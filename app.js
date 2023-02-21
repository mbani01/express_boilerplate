import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet'
import {errorHandler} from './src/middelware/index.middelware.js'
import {testRouter} from './src/routes/index.routes.js';

app.use(helmet()); // adding security layers 
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.use('/test', testRouter)

app.use(errorHandler) // All routes should be defined above this line in order to catch exceptions

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log(`App listening on ${port}`);
});