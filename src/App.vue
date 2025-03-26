<template>
  <div>
    <!-- <RouterLink class="nav" to="/">Главная</RouterLink> -->
    <RouterView />
  </div>
  
</template>
<script setup>

</script>

<style>
/* #app{
    width: 375px;
    height: 667px;
    background-color: blueviolet;
    padding-top: 20px;
} */
.nav{
  background-color: rgb(27, 21, 49);
  font-size: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-right: 30px;
  color: rgb(197, 188, 188);
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
}
div{
  width: 375px;
  height: 667px;
}
</style>
