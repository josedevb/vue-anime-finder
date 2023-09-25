<template lang="pug">
#app
  pm-header

  router-view

  pm-footer
</template>

<script>
import PmFooter from '@/components/layout/PmFooter.vue';
import PmHeader from '@/components/layout/PmHeader.vue';
export default {
  name: 'App',
  components: {
    PmFooter,
    PmHeader,
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
