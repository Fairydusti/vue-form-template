import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
	state:{
		formData:{}
	},
	mutations:{
		setFormData(state, data){
			state.formData = data;
		}
	},
	getters:{
		getFormData: state =>{
			return state.formData;
		}
	}

})