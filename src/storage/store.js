import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
	state:{
		persondata:{
		},
		iceCreamData:{},
		otherData:{}
	},
	mutations:{
		setPersonData: (state, data) =>{
			state.persondata = data;
		}
	},
	getters:{
		getPersonData: state =>{
			return state.personData;
		}
	}

})