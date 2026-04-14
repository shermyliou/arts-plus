<script setup>
import { ref } from "vue";
import SideBar from "../components/common/SideBar.vue";

const showCard = ref(false);
const showWord = ref(true);
const showSidebar = ref(false);
const emit = defineEmits(["allow-location"]);

function handleMapClick() {
  if (!showCard.value) {
    showCard.value = true;
    showWord.value = false;
    showSidebar.value = true;
  }
}

function handleAllow() {
  showCard.value = false;
  emit("allow-location");
}

function handleDeny() {
  showCard.value = false;
  showWord.value = false;
}
</script>

<template>

  <div class="container" @click="handleMapClick">
  <img src="/images/mapHome.jpg" alt="" class="map-img" />
  <SideBar v-if="showSidebar" class="sidebar" @click.stop :no-hover="true" />
    

    <div v-if="showWord" class="word">
      <h1>探索<br>下一個藝文新旅程！</h1>
    </div>

    <img src="/images/統一黃-地點標示11.png" alt="" class="mappin mappin11">
    <img src="/images/統一黃-地點標示8.png" alt="" class="mappin mappin8">
    <img src="/images/統一黃-地點標示6.png" alt="" class="mappin mappin6">
    <img src="/images/統一黃-地點標示-新莊.png" alt="" class="mappin mappin-z">
    <img src="/images/統一黃-地點標示-板橋.png" alt="" class="mappin mappin-b">
    <img src="/images/統一黃-地點標示-永安藝文.png" alt="" class="mappin mappin-q">
    <img src="/images/統一黃-地點標示-四四南村.png" alt="" class="mappin mappin-s">
    <img src="/images/統一黃-地點標示-台北城市舞台.png" alt="" class="mappin mappin-taipei">

    <Transition name="fade">
      <div v-if="showCard" class="overlay" @click.self="handleDeny">
        <div class="permission-card" @click.stop>

          <!-- 關閉叉叉 -->
          <button class="close-btn" @click="handleDeny">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="3" y1="3" x2="15" y2="15" stroke="#333" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="15" y1="3" x2="3" y2="15" stroke="#333" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- 標題 -->
          <h2 class="card-title">Arts+ 要求下列權限</h2>

          <!-- 定位說明列 -->
          <div class="location-row">
            <img src="/public/images/icon/location-dot-solid-full.svg" alt="">
            <span>存取您的位置資訊</span>
          </div>

          <!-- 按鈕群 -->
          <div class="btn-group">
            <button class="perm-btn" @click="handleAllow">造訪這個網站時允許</button>
            <button class="perm-btn" @click="handleAllow">這次允許</button>
            <button class="perm-btn" @click="handleDeny">一律不允許</button>
          </div>

        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  cursor: pointer;
  height: 1080px
}

.map-img {
  width: 100%;
  height: 1080px;
  z-index: 1;
}

.word {
  display: flex;
  position: absolute;
  top: 410px;
  right: 400px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  border: 1px solid #383838;
  width: 481px;
  height: 206px;
  background-color: rgb(255, 255, 255);
  padding: 41px 32px;
  z-index: 3;
}

h1 {
  font-size: 42px;
  font-weight: 600;
}

.mappin {
  position: absolute;
  z-index: 2;
}
.mappin11     { top: 580px; right: 360px; }
.mappin8      { top: 220px; right: 370px; }
.mappin6      { top: 100px; right: 765px; }
.mappin-z     { top: 475px; right: 985px; }
.mappin-b     { top: 580px; right: 740px; }
.mappin-q     { top: 760px; right: 70px;  }
.mappin-s     { top: 460px; right: 170px; }
.mappin-taipei{ top: 280px; right: 50px;  }

/* 遮罩 */
.overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 卡片 — 對應設計稿：白底、大圓角、無明顯陰影邊框 */
.permission-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  width: 430px;
  height: 410px;
  padding: 24px 24px;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
}

/* 右上角叉叉 */
.close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.15s;

  &:hover {
    background: #f0f0f0;
  }
}

/* 標題 */

.card-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px;
  padding-right: 28px; /* 避免被叉叉遮到 */
  line-height: 1.3;
}

/* 定位圖示列 */
.location-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  color: #1a1a1a;
  margin-bottom: 24px;
 
}

/* 按鈕群 */
.btn-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;       
  align-items: center; 
}

/* 按鈕 — 對應設計稿：灰底、圓角、文字置中 */
.perm-btn {
  width: 100%;
  padding: 14px 16px;
  border-radius: 50px;          /* 膠囊型，對應設計稿圓角程度 */
  font-size: 24px;
  font-weight: 500;
  color: #1a1a1a;
  background: #D9D9D9;          /* 淺灰，對應設計稿按鈕顏色 */
  border: none;
  cursor: pointer;
  text-align: center;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    background: #c8c8c8;
  }

  &:active {
    background: #b8b8b8;
    transform: scale(0.98);
  }
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .map-img {
    width: 100%;
    height: 100%;
  }
}
</style>