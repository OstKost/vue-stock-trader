import ActionTypes from '../types';

const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  [ActionTypes.buyStock]: (state, { id, quantity, price }) => {
    const record = state.stocks.find(el => el.id === id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id,
        quantity,
        price,
      });
    }
    state.funds -= price * quantity;
  },
  [ActionTypes.sellStock]: (state, { id, quantity, price }) => {
    const record = state.stocks.find(el => el.id === id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += price * quantity;
  },
  [ActionTypes.setPortfolio]: (state, { funds, stockPortfolio = [] }) => {
    state.funds = funds;
    state.stocks = stockPortfolio;
  },
};

const actions = {
  [ActionTypes.sellStock]: ({ commit }, order) => {
    commit(ActionTypes.sellStock, order);
  },
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds: state => state.funds,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
