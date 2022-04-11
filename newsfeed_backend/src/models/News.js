module.exports = (sequelize,Sequelize) => {
	const News = sequelize.define("news",{
		title:{type:Sequelize.STRING},
		description:{type:Sequelize.STRING},
		author:{type:Sequelize.STRING},
		published:{type:Sequelize.DATE},
		url:{type:Sequelize.STRING},
		content:{type:Sequelize.STRING}
	});
	return News;
};