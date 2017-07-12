import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import R from 'ramda'
export const store = new Vuex.Store({
	state:{
		persondata:{},
		iceCreamData:{},
		otherData:{},
		page: 0
	},
	mutations:{
		setPersonData: (state, data) =>{
			state.persondata = data;
		},
		setOtherData: (state, data)=> {
			state.otherData = data;
		},
		setIceCreamData:(state,data)=>{
			state.iceCreamData = data;
		},
		changePage:(state, data)=>{
			state.page = data;
		}
	},
	actions:{
		changePersonData: ({commit}, payload)=>{
			commit('setPersonData', payload)
		},
		changeOtherData: ({commit}, payload)=>{
			commit('setOtherData', payload)
		},
		changeIceCreamData: ({commit}, payload)=>{
			commit('setIceCreamData', payload)
		},
		changePage: ({commit}, payload)=>{
			commit('changePage', payload)
		}
	},
	getters:{
		formData: (state) =>{
			return {'person': state.persondata, 'mail': state.otherData, 'icecream': state.iceCreamData};
		}
	}

});