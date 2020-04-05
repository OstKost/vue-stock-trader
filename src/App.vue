<template>
  <sui-container>
    <app-header></app-header>
    <main>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </main>
  </sui-container>
</template>

<script>
import Header from '@/components/Header';
import ActionTypes from './store/types';

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch(ActionTypes.initStocks);
  },
};
</script>

<style>
body {
  padding: 30px;
}
main {
  padding: 30px 0;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(30px);
    opacity: 0;
  }
}
</style>
