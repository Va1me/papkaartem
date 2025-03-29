<template>
    <div id="header">
      <img id="threeLines" src="./assets/threeLines.png" alt="" v-on:click="LeftPanel=!LeftPanel">
      <img id="headerText" src="./assets/ArtemPapka.png" alt="">
    </div>
    <div id="leftPanel" v-show="LeftPanel">
      <RouterLink class="nav" to="/">Главная</RouterLink>
      <RouterLink class="nav" to="/bio">Биография</RouterLink>
    </div>
  <RouterView/>
</template>
<script setup>
import { ref } from 'vue';

let LeftPanel = ref(false);
</script>

<style>
body{
  margin: 0;
}
#app{
  box-sizing: border-box;
  background: #DBDBDB;
  border: 25px solid #CCCACA;
  min-height: 100vh;
  padding: 3vw;
}
.nav{
  display: block;
  position: relative;
  text-align: center;
  font-size: 4vw;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 0.1vw #272727;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
  background: #141414;
  margin: 2vw;
}
#header{
  padding: 0;
  height: 6vw;
  position: fixed;
  width: 100vw;
  background-color: #141414;
  left: 0;
  top: 0;
  opacity: 1;
  z-index: 899;
}
#threeLines{
  margin: 0;
  height: 6vw;
  position: absolute;
}
#headerText{
display: block;
margin: auto;
height: 5vw;
}
#leftPanel{
  position: fixed;
  background-color: #4d4d4d;
  z-index: 999;
  left: 0;
  top: 6vw;
  border-bottom-right-radius: 1vw;
}
</style>
