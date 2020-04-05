<template>
  <sui-card>
    <sui-card-content>
      <sui-card-header>{{ stock.name }}</sui-card-header>
      <sui-card-meta>Price: {{ stock.price | currency }}</sui-card-meta>
      <sui-card-description>{{ stock.description }}</sui-card-description>
    </sui-card-content>

    <sui-form class="form">
      <sui-form-field :error="insufficientFunds">
        <input v-model="quantity" type="number" placeholder="Quantity" />
      </sui-form-field>
    </sui-form>

    <sui-button
      positive
      attached="bottom"
      :disabled="insufficientFunds || quantity <= 0"
      @click="buyStock"
    >
      {{ insufficientFunds ? 'Not enough' : 'Buy' }}
    </sui-button>
  </sui-card>
</template>

<script>
import ActionTypes from '../../store/types';

export default {
  name: 'StockItem',
  props: {
    stock: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch(ActionTypes.buyStock, order);
      this.quantity = 0;
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  padding: 0 15px 10px;
}
</style>
