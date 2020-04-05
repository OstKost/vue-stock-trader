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
import { mapGetters } from 'vuex';
import Stock from './Stock';

export default {
  name: 'Portfolio',
  components: {
    stockItem: Stock,
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio',
    }),
  },
};
</script>
