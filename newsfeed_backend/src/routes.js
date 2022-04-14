const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/',async(req,res) =>{
	try{
		var url = 'http://newsapi.org/v2/top-headlines?'+'country=it&' +
          'apiKey=3e06a7fe4c174c94aa2df4831357306f';
		const news_get = await axios.get(url);
		const articoli = news_get.data.articles.filter(function(x) {
			if(x["author"] != null){
				return ((x["author"].split(' ').length == 3) || (x["author"].split(' ').length == 2));
			}
			return;
		});
		res.send({articles:articoli});
	}
	
	catch(error){
		if(error.response)
			console.log(error);
	}
});


module.exports = router;