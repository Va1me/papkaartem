<template>
    <main>
        <h1>Папка Артём
успешный программист, спортсмен, 
филантроп, да и вообщем хороший человек</h1>
        <div id="img1"></div>
        <div id="img2"></div>
        <div id="img3"></div>
        <div id="img4"></div>
    </main>
</template>

<script setup>

</script>

<style scoped>
main{
    position: relative;
    width: 375px;
    height: 667px;
    background-image: url('../assets/background.png');
    background-size: 375px 667px;
}
#img1{
position: absolute;
width: 130px;
height: 188px;
background: url(../assets/img1.png);
bottom: 0;
}
#img2{
position: absolute;
width: 127px;
height: 188px;
background: url(../assets/img2.png);
bottom: 0;
left: 130px;
}
#img3{
position: absolute;
width: 118px;
height: 188px;
background: url(../assets/img3.png);
bottom: 0;
right: 0;
}
#img4{
position: absolute;
width: 154px;
height: 130px;
background: url(../assets/img4.png);
bottom: 188px;
}
h1{
position: absolute;
width: 366px;
height: 105px;

font-family: 'Caveat';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 32px;
text-align: center;

color: #FF1EBB;

}
</style>
