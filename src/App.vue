<template>
  <div id="header">
    <img id="threeLines" src="./assets/threeLines.png" alt="" v-on:click="leftPanel();" an>
    <img id="headerText" src="./assets/ArtemPapka.png" alt="">
  </div>
  <div id="leftPanel" v-show="LeftPanel">
    <RouterLink class="nav" to="/" v-on:click="leftPanel()">Главная</RouterLink>
    <RouterLink class="nav" to="/bio" v-on:click="leftPanel()">Биография</RouterLink>
  </div>
  <div id="topDiv">
    <div id="textH1Div">
      <h1 id="textH1" class="text">Папка Артём<br>
        успешный программист, спортсмен,<br>
        филантроп, да и вообщем хороший человек</h1>
    </div>
  </div>
  <RouterView />
  <div id="bottomInfo">
    <img id="bottomImg" src="./assets/bottom.png" alt="">
    <a id="bottomLink" href="https://vk.com/papkaartem">
      <div id="vkLink">
        <img src="./assets/vk.png" alt="">
        <p>vk.com/papkaartem</p>
      </div>
    </a>
  </div>
</template>
<script setup>
import { setInterval } from 'core-js';
import { ref } from 'vue';

const LeftPanel = ref(true);
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

<style>
body {
  margin: 0;
}

#app {
  background: #adadad;
}

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

#header {
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
#bottomInfo{
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 30vw;
  background-color: #141414;
  z-index: 998;
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
  width: 30vw;
  position: fixed;
  background-color: #4d4d4d;
  z-index: 899;
  left: v-bind(leftPanelLeft + 'vw');
  top: v-bind(leftPanelLeft+6 + 'vw');
  border-bottom-right-radius: 1vw;
}

#topDiv {
  position: absolute;
  top: 6vw;
  left: 0;
  width: 100vw;
  height: 15vw;
  background-image: url(./assets/codes.jpg);
  background-size: auto 100%;
}

#textH1 {
  text-align: center;
  font-size: 3vw;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 900;
}

#textH1Div {
  position: absolute;
  width: 100vw;
  height: 15vw;
  backdrop-filter: blur(0.08vw);
}
#bottomImg{
  margin-left: 20vw;
  height: 100%;
}
#vkLink img{
  height: 60%;
  position: absolute;
  margin-top: 6vw;
  margin-left: 32vw;
}
#vkLink p{
  top: 0;
  position: absolute;
  margin-top: 12vw;
  margin-left: 52vw;
  color: rgb(255, 255, 255);
  font-size: 5vw;
}
#vkLink{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
