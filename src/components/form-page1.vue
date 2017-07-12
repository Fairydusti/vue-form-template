<template>
	<div>
		
	    <div class="form-group">
	        <label for="name">Name</label>
	        <input
	          type="text"
	          id="name"
	          class="form-control"
	          placeholder="Name"
	          @input="updateData"
	          autofocus>
	    </div>
	    <div class="form-group">
	        <label for="email">Email</label>
	        <input
	          type="email"
	          id="email"
  	          @input="updateData"
	          class="form-control">
	    </div>
	    <div class="form-group">
	        <label for="address">Address</label>
	        <input
	          type="text"
	          id="address"
	          @input="updateData"
	          class="form-control">
	    </div>
	    <div class="form-group">
	        <label for="zip">Zip code</label>
	        <input
	          type="number"
	          id="zip"
	          @input="updateData"
	          class="form-control">
	    </div>
       <router-link to="/mail" replace>Next</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				data:{
					name: '',
					email: '',
					address: '',
					zip: ''
				}
			}
		},
		methods: {
			updateData(event){
            //Check changed value in dummy switch case
				switch(event.target.id){
					case 'name':
						this.data.name = event.target.value;
						break;
					case 'email':
						this.data.email = event.target.value;
						break;
					case 'address':
						this.data.address = event.target.value;
						break;
					case 'zip':
						this.data.zip = event.target.value;
						break;
				}
				this.$store.commit('setPersonData', this.data);
			}
		}
	}
</script>