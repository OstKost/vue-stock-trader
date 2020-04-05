import ActionTypes from '../types';
import initStocks from '../../data/stocks';

const state = {
  stocks: [],
};

const mutations = {
  [ActionTypes.setStocks]: (state, stocks) => {
    console.log('stocks', stocks);
    state.stocks = stocks;
  },
  [ActionTypes.randomizeStocks]: state => {
    for (let stock of state.stocks) {
      const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      const percent = 1 + Math.random().toFixed(2) * plusOrMinus;
      const basePrice = stock.price < 30 ? 40 : stock.price;
      stock.price = Math.round(basePrice * percent);
    }
  },
};

const actions = {
  [ActionTypes.buyStock]: ({ commit }, order) => {
    commit(ActionTypes.buyStock, order);
  },
  [ActionTypes.initStocks]: ({ commit }) => {
    commit(ActionTypes.setStocks, initStocks);
  },
  [ActionTypes.randomizeStocks]: ({ commit }) => {
    commit(ActionTypes.randomizeStocks);
  },
};

const getters = {
  stocks: state => state.stocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
