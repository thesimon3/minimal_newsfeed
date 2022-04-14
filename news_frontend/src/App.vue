<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
export default{
	name:"app",
	components:{HomeView},
	data(){
		return{
			source:""
			}
		}
	};
</script>

<template>
	<div id="notizia">
		<HomeView v-bind:source="source"></HomeView>
	</div>
</template>
