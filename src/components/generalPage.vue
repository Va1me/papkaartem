<template>
      <div id="topDiv">
      <h1 id="textH1" class="text">Папка Артём<br>
        успешный программист, спортсмен,<br>
        филантроп, да и вообщем хороший человек</h1>
    </div>
      <div class="cards">
         <img id="img1" src="../assets/img4.png" alt="">
         <p class="text">
            Артем Папка — это настоящий феномен в мире программирования! 🚀 Его имя гремит среди IT-сообщества, словно
            гром среди ясного неба. 🌩️ Этот человек обладает таким талантом и креативностью, что кажется, будто код сам
            собой складывается в его голове, превращаясь в шедевры цифровой архитектуры. 🧠✨
         </p>
      </div>
      <div class="cards">
         <img id="img2" src="../assets/img2.png" alt="">
         <p class="text">
            Его программы работают безупречно, словно швейцарские часы, ⏰ и каждый проект, над которым он трудится,
            становится хитом. 🔥 Артем известен своей способностью решать самые сложные задачи с легкостью, которую
            многие программисты могут лишь мечтать достичь. 💻👨‍💻 Его подход к работе — это сочетание гениальности и
            педантичности, что делает его уникальным мастером своего дела. 🛠️💡
         </p>
      </div>
      <div class="cards">
         <img id="img3" src="../assets/img3.png" alt="">
         <p class="text">
            Но дело не только в его профессионализме. Артем Папка — это еще и личность, которая притягивает людей своим
            обаянием и харизмой. 🌟 Вокруг него всегда кипит жизнь, идеи рождаются одна за другой, и каждая встреча с
            ним оставляет незабываемые впечатления. 🗣️ Он умеет вдохновлять и заряжать энергией всех, кто оказывается
            рядом. 💥⭐️
         </p>
      </div>
      <div class="cards">
         <img id="img4" src="../assets/img1.png" alt="">
         <p class="text">
            Неудивительно, что популярность Артема зашкаливает. 📈 Его аккаунт в соцсетях — настоящая Мекка для тех, кто
            хочет узнать секреты мастерства и получить советы от настоящего гуру. 🕵️‍♂️ А доходы? О, они соответствуют
            его статусу суперзвезды! 💰 Деньги текут рекой, ведь компании готовы платить любые суммы, чтобы заполучить
            такого специалиста. 🏦💼
         </p>
      </div>
      <div class="cards">
         <img id="img5" src="../assets/img5.jpg" alt="">
         <p class="text">
            Артем Папка — это воплощение успеха, вдохновения и профессионализма. 🎯 Это тот самый человек, которого
            хочется знать лично, учиться у него и стремиться стать хотя бы немного похожим на него. 🙋‍♂️👨‍🏫
         </p>
      </div>
</template>

<script setup>

</script>

<style scoped>
img {
   height: 35vw;
}

.text {
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   color: #000000;
   margin: 0;
   padding-left: 2vw;
   padding-top: 1vw;
   font-weight: 700;
   font-size: 2.6vw;
}

.cards {
   margin: 6vw auto 6vw auto;
   width: 75vw;
   background-color: #bbbaba;
   -webkit-box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
   box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
}

#img1 {
   float: right;
   margin-left: 1vw;
}
#img2{
float: left;
margin-right: 1vw;
}
#img3 {
   float: right;
   margin-left: 1vw;
}
#img4{
   float: left;
   margin-right: 1vw;
}
#img5 {
   float: right;
   margin-left: 1vw;
}
#topDiv {
  height: 15vw;
  background-image: url(../assets/codes.jpg);
  background-size: auto 50vw;
}

#textH1 {
  padding: 0;
  text-align: center;
  font-size: 3vw;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 900;
  width: 100vw;
  backdrop-filter: blur(0.1vw);
}
</style>
