<template>
  <header><headerBlock></headerBlock></header>
  <RouterView />
  <footer><footerBlock></footerBlock></footer>
</template>
<script setup>
import footerBlock from './components/footerBlock.vue';
import headerBlock from './components/headerBlock.vue';
</script>

<style>
body {
  margin: 0;
}
#app {
  padding-top: 6vw;
  background: #adadad;
  min-height: 100vh;
  position: relative;
}
</style>
