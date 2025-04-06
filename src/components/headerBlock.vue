<template>
    <div id="headerBlock">
      <img id="threeLines" src="../assets/threeLines.png" alt="" v-on:click="leftPanel();" an>
      <img id="headerText" src="../assets/ArtemPapka.png" alt="">
    </div>
    <div id="leftPanel" v-show="LeftPanel">
      <RouterLink class="nav" to="/" v-on:click="leftPanel()">Главная</RouterLink>
      <RouterLink class="nav" to="/bio" v-on:click="leftPanel()">Биография</RouterLink>
      <RouterLink class="nav" to="/comm" v-on:click="leftPanel()">Комментарии</RouterLink>
      <RouterLink class="nav" to="/devs" v-on:click="leftPanel()">Разработчики</RouterLink>
    </div>
  </template>
  <script setup>
  import { setInterval } from 'core-js';
  import { ref } from 'vue';
  
  const LeftPanel = ref(false);
  const leftPanelLeft = ref(-25)
  let doLeftPanel = false;
  
  function leftPanel() {
    if (!doLeftPanel) {
      doLeftPanel = true;
      if (leftPanelLeft.value <= -25) {
        LeftPanel.value = true;
        const intervalId = setInterval(() => {
          leftPanelLeft.value += 0.5;
          if (leftPanelLeft.value >= 0) {
            doLeftPanel = false;
            clearInterval(intervalId);
          }
        }, 1)
      }
      else if (leftPanelLeft.value >= 0) {
        const intervalId = setInterval(() => {
          leftPanelLeft.value -= 0.5;
          if (leftPanelLeft.value <= -25) {
            LeftPanel.value = false;
            doLeftPanel = false;
            clearInterval(intervalId);
          }
        }, 1)
      }
      doLeftPanel = false;
    }
  }
  </script>
  
  <style scoped>
  .nav {
    display: block;
    position: relative;
    text-align: center;
    font-size: 4vw;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
    color: rgb(255, 255, 255);
    text-decoration: none;
    border-radius: 12px;
    padding: 10px;
    background: #141414;
    margin: 2vw;
  }
  
  #headerBlock {
    padding: 0;
    height: 6vw;
    position: fixed;
    width: 100vw;
    background-color: #141414;
    left: 0;
    top: 0;
    opacity: 1;
    z-index: 999;
  }
  #threeLines {
    margin: 0;
    height: 6vw;
    position: absolute;
  }
  
  #headerText {
    display: block;
    margin: auto;
    height: 5vw;
  }
  
  #leftPanel {
    position: fixed;
    background-color: #4d4d4d;
    z-index: 899;
    left: v-bind(leftPanelLeft + 'vw');
    top: v-bind(leftPanelLeft+6 + 'vw');
    border-bottom-right-radius: 1vw;
  }
  </style>
  