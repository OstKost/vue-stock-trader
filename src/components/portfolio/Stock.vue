<template>
  <sui-card>
    <sui-card-content>
      <sui-card-header>{{ stock.name }}</sui-card-header>
      <sui-card-meta>
        <span> Price: {{ stock.price | currency }}</span>
      </sui-card-meta>
      <sui-card-meta>
        <span> Quantity: {{ stock.quantity }} </span>
      </sui-card-meta>
    </sui-card-content>

    <sui-form class="form">
      <sui-form-field :error="insufficientQuantity">
        <input v-model="quantity" type="number" placeholder="Quantity" />
      </sui-form-field>
    </sui-form>

    <sui-button
      color="orange"
      attached="bottom"
      :disabled="insufficientQuantity || quantity <= 0"
      @click="sellStock"
    >
      {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
    </sui-button>
  </sui-card>
</template>

<script>
import { mapActions } from 'vuex';
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      setSellOrder: ActionTypes.sellStock,
    }),
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity,
      };
      this.setSellOrder(order);
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  padding: 0 15px 10px;
}
</style>
