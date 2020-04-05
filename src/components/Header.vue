<template>
  <sui-menu attached="top">
    <router-link
      is="sui-menu-item"
      to="/"
      active-class="active"
      class="logo"
      style="font-weight: 'bold';"
      exact
      >Stock Trader</router-link
    >
    <router-link is="sui-menu-item" to="/portfolio" active-class="active"
      >Portfolio</router-link
    >
    <router-link is="sui-menu-item" to="/stocks" active-class="active"
      >Stocks</router-link
    >
    <sui-menu-menu position="right">
      <sui-menu-item>
        <strong>Funds: {{ funds | currency }}</strong>
      </sui-menu-item>
      <sui-menu-item>
        <sui-button color="blue" content="End Day" @click="endDay" />
      </sui-menu-item>
      <sui-dropdown item text="Save & Load">
        <sui-dropdown-menu>
          <sui-dropdown-item @click="saveData">Save Data</sui-dropdown-item>
          <sui-dropdown-item @click="loadData">Load Data</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
import { mapActions } from 'vuex';
import ActionTypes from '../store/types';

export default {
  name: 'Header',
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: ActionTypes.randomizeStocks,
      loadFirebaseData: 'loadData',
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.loadFirebaseData();
    },
  },
};
</script>

<style scoped>
.logo {
  font-weight: bold !important;
}
</style>
