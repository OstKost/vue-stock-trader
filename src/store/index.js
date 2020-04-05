import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio,
  },
});

export default store;
