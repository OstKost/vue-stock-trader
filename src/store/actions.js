import Vue from 'vue';
import ActionTypes from './types';

export const loadData = ({ commit }) => {
  Vue.http
    .get('data.json')
    .then(response => response.json())
    .then(data => {
      if (!data) {
        return;
      }
      const { stocks, funds, stockPortfolio } = data;
      const portfolio = {
        stockPortfolio,
        funds,
      };

      commit(ActionTypes.setStocks, stocks);
      commit(ActionTypes.setPortfolio, portfolio);
    });
};
