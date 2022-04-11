module.exports = {
		DB :"newsfeed",
		USER: process.env.DB_USER || 'newsfeed',
		PASSWORD: process.env.DB_PASS || 'newsfeed',
		dialect: process.env.DIALECT || 'sqlite',
		HOST: process.env.HOST || 'localhost',
		storage: './newsfeed.sqlite'
};
