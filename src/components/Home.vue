<template>
  <div>
    <h1>Trade of View your Portfolio</h1>
    <p>You may Save and Load your data</p>
    <p>Click on 'End Day' to begin a new day!</p>
    <hr />
    <h4>Your Funds: {{ funds | currency }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>
