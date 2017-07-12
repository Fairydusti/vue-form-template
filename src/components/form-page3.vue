<template>
<div>
	  <label for="iceCreamFlavours">Select your favourite icecream?</label>
	  <select
	         id="iceCreamFlavours"
	         class="form-control"
    	      @change="iceCreamData"
	          >
         <option disabled selected value="">Select your favourite flavour</option>
	      <option 
	      v-for="flavour in iceCreamFlavours" 
	      :value="flavour"
	      >{{flavour}}</option>
	  </select>
	</div>
</template>
<script>
import axios from 'axios'
import R from 'ramda'
export default{
	data(){
		return{
			iceCreamFlavours: [],
			getUrl: "/../src/assets/mock.json",
			data:{
				favIceCream:""
			}
		}
	},
	methods:{
		iceCreamData(event){
			const isSelected = (n) => n.selected === true;
			let item = R.filter(isSelected, event.target.options);
			this.data.favIceCream = item[0].value;
			this.$store.commit('setIceCreamData', this.data);
		}
	},
	created(){
	    const vm = this;
	    axios.get(this.getUrl)
	    .then(function (response) {
	      if(!response.data){
	        console.error('There is problem fetching icecream data')
	        return;
	      }
	      response.data.data.map( function(element) {
	          vm.iceCreamFlavours.push(element);
	      });
	    })
	    .catch(function (error) {
	      console.error(error);
	    });
	}
}
</script>