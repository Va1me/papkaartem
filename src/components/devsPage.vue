<template>
    <div id="topDiv">
    <h1 id="textH1" class="text">Папка Артём<br>
      успешный программист, спортсмен,<br>
      филантроп, да и вообщем хороший человек</h1>
  </div>
    <div class="cards">
       <img id="img1" src="../assets/artem.png" alt="">
       <p class="text">
         Артем — опытный программист 💻<br>
         известный своими качественными проектами и новаторским подходом ✨<br>
         Он специализируется на разработке мобильных приложений и корпоративных систем 📱💼<br>
         но его истинная страсть — создание игр 🎮<br>
         Артем также активно делится своим опытом через мастер-классы и вебинары 🎤<br>
         помогая молодым специалистам развиваться 🚀<br>
         В свободное время он увлекается спортом 🏃‍♂️🏋️‍♂️<br>
         и путешествиями 🌍✈️
       </p>
    </div>
    <div class="cards">
       <img id="img2" src="../assets/grisha.png" alt="">
       <p class="text">
         Григорий — талантливый программист 💻<br>
         увлеченный технологиями с детства. Сейчас он работает в ведущей IT-компании 🏢<br>
         разрабатывая ПО для разных отраслей 🛠️<br>
         Коллеги ценят его за профессионализм и готовность делиться опытом 🧑‍💻<br>
         В свободное время Григорий участвует в конференциях 🗣️<br>
         читает научную фантастику 📚 <br>
         и путешествует ✈️
       </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
img {
 float: right;
 margin-left: 1vw;
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
 position: relative;
 margin: 6vw auto 6vw auto;
 width: 75vw;
 background-color: #bbbaba;
 -webkit-box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
 -moz-box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
 box-shadow: 25px 18px 14px 5px rgba(34, 60, 80, 0.2);
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
height: 15vw;
backdrop-filter: blur(0.1vw);
}
</style>
