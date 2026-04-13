<script setup>
import BootstrapChecker from "./BootstrapChecker.vue";
</script>

<template>
  <div class="container">
    <img src="/images/mapHome.jpg" alt="" class="map-img" />
    <div class="word"><h1>探索<br>下一個藝文新旅程！</h1></div>
    <img src="/images/統一黃-地點標示11.png" alt="" class="mappin11">
    <img src="/images/統一黃-地點標示8.png" alt="" class="mappin8">
    <img src="/images/統一黃-地點標示6.png" alt="" class="mappin6">
    <img src="/images/統一黃-地點標示-新莊.png" alt="" class="mappin-z">
    <img src="/images/統一黃-地點標示-板橋.png" alt="" class="mappin-b">
    <img src="/images/統一黃-地點標示-永安藝文.png" alt="" class="mappin-q">
    <img src="/images/統一黃-地點標示-四四南村.png" alt="" class="mappin-s">
    <img src="/images/統一黃-地點標示-台北城市舞台.png" alt="" class="mappin-taipei">

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
  top:500px;
  right: 440px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  border: 1px solid #383838 ;
  width: 481px;
  height: 206px;
  background-color: rgb(255, 255, 255);
  z-index:3;
}
.mappin11{
  position: absolute;
  top:600px;
  right: 350px;
  z-index:2; 
}
.mappin8{
  position: absolute;
  top: 250px;
  right: 250px;
  z-index:2; 
}
.mappin6{
  position: absolute;
  top: 200px;
  right: 850px;
  z-index:2; 
}
</style>
