<template>
    <RouterLink class="nav" to="/">Главная</RouterLink>
    <RouterLink class="nav" to="/bio">Биография</RouterLink>
  <RouterView/>
</template>
<script setup>

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
  margin-right: 2vw;
  position: static;
  font-size: 7vw;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 0.2vw #272727;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
  background: #999999;
}
</style>
