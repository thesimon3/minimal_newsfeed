const Sequelize = require('sequelize');
const config = require('../config/config.js');
console.log(config);

const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
	host:config.HOST,
	dialect:config.dialect,
	storage:config.storage
});
		
	
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.news = require('./News.js')(sequelize,Sequelize);	

module.exports = db;
