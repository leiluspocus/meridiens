import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// gFHgWPlWBjbh7Lzx
const points = [
	{
		id: '15VB',
		name: 'Fui',
		roles: [ 'Blabla', 'Blibli', 'Blublu' ],
		localization: 'tlkdjfg',
		picture: 'https://placekitten.com/g/200/200'
	},
	{
		id: '14VB',
		name: 'Fui',
		roles: [ 'Blabla', 'Blibli', 'Blublu' ],
		localization: 'tlkdjfg',
		picture: 'https://placekitten.com/g/150/150'
	}
];
export default new Vuex.Store({
	state: {
		points
	},
	mutations: {},
	actions: {},
	modules: {}
});
