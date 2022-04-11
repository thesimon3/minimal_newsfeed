const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const {sequelize} = require('./models');
const config = require('./config/config')
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParse.json());
app.use(cors());


app.get('/',(req,res) => {
	res.send({
		message:"csao"
	})
})

const db = require('./models');
db.sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
	console.log("Server is running on port "+PORT);
})
