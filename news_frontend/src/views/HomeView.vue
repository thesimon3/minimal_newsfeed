<template>
  <main>
  <h1> Le notizie più importanti in Italia</h1>
    <div class="news" v-for="article in articles">
		<a v-bind:href="article.url" target="_blank">
			<img class="media-news" :src="article.urlToImage" alt="image"/> </a>
			<a v-bind:href="article.url" target="_blank">
			<h2 class="news-title">{{article.title}}</h2> </a>
			
			<p class="news-description">{{article.description}}</p> 
			<p class="news-author">Di {{article.author}}</p>
			<br>
	</div>
  </main>
</template>

<script>
import DataService from  "../services/DataService";
export default{
	name:"news",
	data(){
		return{
			articles:[]
			};
	},
	methods:{
		getNews(){
		DataService.getAll().
		then(response => {
			this.articles = response.data.articles;
			console.log(response.data);
			}).
		catch(e => {
			console.log(e);
		});	
	}},
	mounted(){
		this.getNews();
	}
};
</script>

<style scoped>
	main{
		font-family:'Arial';
	}
	
	h1{
		text-align:center;
		font-weight:bold;
		background-color:#800000;
		padding:1rem;
		margin:1rem;
		color:white;
	}
	
	.news{
		border: 1px black solid;
		margin:1rem;
		margin-left:4rem;
		margin-right:4rem;
	}
	
	.news a{
		text-decoration:none;
	}
	
	.news a:hover{
		text-decoration:underline;
		color:white;
	} 
	
	img.media-news{
		display:block;
		margin:auto;
		width:50%;
		margin-top:1rem;
	}
	
	h2.news-title{
		color:white;
		background-color:#008B8B;
		text-align:center;
		padding:0.5rem;
	}
	
	p.news-description{
		text-align:center;
		color:black;
	}
	
	p.news-author{
		font-size:smaller;
		font-style:italic;
		color:black;
	}
	
</style>