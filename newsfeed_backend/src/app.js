const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes.js'));
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
	console.log("Server is running on port "+PORT);
})
