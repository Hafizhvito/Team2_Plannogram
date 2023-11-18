import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	items: [],
}

const mutations = {
	updateQty(state, payload){
		axios.put('http://localhost:3000/items/' + payload.id, payload)
	},
	setItem(state, payload){
		if(payload.from == 'catalog'){
			payload.item.is_selected = true
			axios.put('http://localhost:3000/items/' + payload.item.id, payload.item)
		}
		else{
			payload.item.is_selected = false
			payload.item.qty = 1
			axios.put('http://localhost:3000/items/' + payload.item.id, payload.item)
		}
	},
	setItems(state, payload){
		state.items = payload
	},
	sortItems(state, payload){
		if(payload == 1){
			state.items = state.items.sort((a, b) => {
				if (a.price < b.price) {
					return -1;
				}
			});
		}
		else if(payload == 2){
			state.items = state.items.sort((a, b) => {
				if (a.price > b.price) {
					return -1;
				}
			});
		}
		else if(payload == 3){
			state.items = state.items.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
			});
		}
		else if(payload == 4){
			state.items = state.items.sort((a, b) => {
				if (a.name > b.name) {
					return -1;
				}
			});
		}
		else{
			state.items = state.items.sort((a, b) => {
				if (a.id < b.id) {
					return -1;
				}
			});
		}
	}
}

const actions = {
	getItems: ({commit, state}) => {
		try{
			const getData = async () => {
				try {
					const res = await axios.get('http://localhost:3000/items');
					console.log(res.data);
					commit('setItems', res.data)
				} catch (err) {
					console.error(err);
				}
			};
			getData();
		}catch(e){
			console.log(e)
		}
	},
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
