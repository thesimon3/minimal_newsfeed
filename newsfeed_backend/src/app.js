const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParse.json());
app.use(cors());

console.log("gimmi");

app.get('/status',(req,res) => {
	res.send({
		message:"csao"
	})
})

app.listen(process.env.PORT || 8080);