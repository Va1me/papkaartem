<template>
  <header><headerBlock></headerBlock></header>
  <RouterView />
  <footerBlock></footerBlock>
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
  position: relative;
  display: flex; 
  flex-direction: column; 
  min-height: 100vh; 
}
</style>
