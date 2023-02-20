import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended:true }));


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log(`App listening on ${port}`);
});