<template>
	<div>
     <router-link to="/user" replace @click="changePage">Start form</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				page: 0
			}
		},
		created(){
			this.$store.dispatch('changePage', this.page);
		}
	}
</script>