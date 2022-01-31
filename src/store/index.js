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
		picture: 'erert'
	},
	{
		id: '14VB',
		name: 'Fui',
		roles: [ 'Blabla', 'Blibli', 'Blublu' ],
		localization: 'tlkdjfg',
		picture: 'erert'
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
