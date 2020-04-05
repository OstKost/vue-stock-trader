<template>
  <div>
    <sui-card-group :items-per-row="3">
      <stock-item
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
      ></stock-item>
    </sui-card-group>
  </div>
</template>

<script>
import Stock from './Stock';

export default {
  name: 'Stocks',
  components: {
    stockItem: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
