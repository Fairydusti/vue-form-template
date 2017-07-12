<template>
	<div>
     <router-link to="/user" replace @click="changePage">Start form</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				page: 11
			}
		},
		methods:{
			changePage(){
				this.$store.discpatch('changePage', this.page);
			}
		},
		created(){
			return{
				changePage:()=>{
					this.$store.dispatch('changePage', this.page);
				}
			}
		}
	}
</script>