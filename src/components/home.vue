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
		methods:{
			changePage(){
				this.$store.discpatch('changePage', this.page);
			}
		},
		created(){
			this.$store.dispatch('changePage', this.page);
		}
	}
</script>