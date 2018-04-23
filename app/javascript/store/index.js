import Vue from 'vue';
import Vuex from 'vuex';
import Hello from '../store/Hello';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Hello,
  },
});

export default store;