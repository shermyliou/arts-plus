<script setup>
import BootstrapChecker from "./BootstrapChecker.vue";
</script>

<template>
  <div class="container">
    <img src="/images/mapHome.jpg" alt="" class="map-img" />
    <div class="word"><h1>探索<br>下一個藝文新旅程！</h1></div>
    <img src="/images/統一黃-地點標示11.png" alt="" class="mappin mappin11">
    <img src="/images/統一黃-地點標示8.png" alt="" class="mappin mappin8">
    <img src="/images/統一黃-地點標示6.png" alt="" class="mappin mappin6">
    <img src="/images/統一黃-地點標示-新莊.png" alt="" class="mappin mappin-z">
    <img src="/images/統一黃-地點標示-板橋.png" alt="" class="mappin mappin-b">
    <img src="/images/統一黃-地點標示-永安藝文.png" alt="" class="mappin mappin-q">
    <img src="/images/統一黃-地點標示-四四南村.png" alt="" class="mappin mappin-s">
    <img src="/images/統一黃-地點標示-台北城市舞台.png" alt="" class="mappin mappin-taipei">

  </div>
</template>

<style lang="scss" scoped>
.container{
   position: relative;
   display: flex;
}
.map-img {
  width: 100%;
  height: 1080px; 
  z-index:1;
}
.word{
  display: flex;
  position: absolute;
  width: 481px;
  height: 206px;
  top:410px;
  right: 350px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  border: 1px solid #383838 ;
  width: 481px;
  height: 206px;
  background-color: rgb(255, 255, 255);
  padding: 41px 32px;
  z-index:3;
}
h1{
  font-size: 42px;
  font-weight: 600;
}
.mappin{
  position: absolute;
  z-index:2; 
}
.mappin11{ 
  top:580px;
  right: 360px;
}
.mappin8{
  top: 220px;
  right: 370px;
}
.mappin6{
  top: 100px;
  right: 765px;
}
.mappin-z{
  top: 475px;
  right: 985px;
}
.mappin-b{
  top: 580px;
  right: 740px;
}
.mappin-q{
  top: 760px;
  right: 70px;
}
.mappin-s{
  top: 460px;
  right: 170px;
}
.mappin-taipei{
  top: 280px;
  right: 50px;
}
@media (min-width: 768px){
 .map-img{
    width:100%;
    height:100%;
 }
}
</style>
