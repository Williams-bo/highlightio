<!-- pages/index.vue -->

<template>
  <div>
    <h1>Hello Nuxt!</h1>
    <ErrorLogger />
  </div>
</template>

<script>
import ErrorLogger from '~/components/ErrorLogger.vue';

export default {
  components: {
    ErrorLogger,
  },
};
</script>

<style scoped>
/* Add your page styles here */
</style>
