<!-- components/ErrorLogger.vue -->

<template>
  <div>
    <h1>Error Logger</h1>
    <button @click="simulateError">Simulate Error</button>
  </div>
</template>

<script>
import { H } from 'highlight.run';

H.init('lgxj7n4d', {
  environment: 'production',
  version: 'commit:abcdefg12345',
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
    urlBlocklist: [
      "https://www.googleapis.com/identitytoolkit",
      "https://securetoken.googleapis.com",
    ],
  },
});

export default {
  methods: {
    simulateError() {
      try {
        // Simulate an error
        throw new Error('An example error occurred');
      } catch (error) {
        // Log the error using Highlight.io
        H.log(error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
