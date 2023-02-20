import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet'

app.use(helmet()); // adding security layers 
app.use(express.json())
app.use(express.urlencoded({ extended:true }));


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log(`App listening on ${port}`);
});