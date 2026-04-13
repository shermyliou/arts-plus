<script setup>
import EventDetail from './EventDetail.vue';
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'
import Search from './Search.vue';
import Map from './Map.vue'

import BootstrapChecker from './BootstrapChecker.vue'

    if (video) {
      card.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play().catch((error) => {
          console.error("影片播放失敗:", error);
        });
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
      });
    }

</script>

<template>
  <div>
    <nav>
      <navbar/>
    </nav>
    <div class="d-flex col-12">
      <aside>
        <SideBar/>
      </aside>
      <main>
        <Map></Map>
        <Search/>
        <!-- <BootstrapChecker /> -->
        <EventDetail></EventDetail>
      </main>
      <aside></aside>
    </div>

    

          <div class="footer-links-group d-flex gap-5">
            <ul class="list-unstyled mb-0">
              <li><a href="#">關於我們</a></li>
              <li><a href="#">代售及廣告服務</a></li>
              <li><a href="#">節目列表</a></li>
            </ul>
            <ul class="list-unstyled mb-0">
              <li><a href="#">成為主辦方</a></li>
              <li><a href="#">服務條款與隱私權</a></li>
              <li><a href="#">聯絡我們</a></li>
            </ul>
          </div>
      

      <div
        class="footer-bottom d-flex align-items-center justify-content-center"
      >
        <p class="m-0">© Copyright 2026. ART+ All Right Reserved</p>
      </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  padding: 80px 60px;
  width: 100%;
  display: flex;
  justify-content: center; /* 水平置中 grid */
  align-items: center;
  margin: 0 auto;
}

/* 角色排版區：實現上三下二 */
.character-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 關鍵：讓內部的卡片置中 */
  gap: 100px 180px; /* 稍微縮小左右間距(140px)，避免文字被推太遠 */
  max-width: 1200px;
}

/* 3. 角色方框主體 */
.character-card {
  position: relative;
  width: 220px;
  height: 220px;
  background-color: #ffdd1dff;
  border: 2px solid #000000;
  cursor: pointer;
}

/* 媒體容器（裝載靜態圖與影片） */
.media-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.static-img,
.hover-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  /* 1. 先讓它靠頂對齊 */
  object-position: top center;
  
  /* 2. 放大比例（例如 1.2 倍），這會讓人物變大，看起來更像半身像 */
  transform: scale(1.7);
  
  /* 3. 稍微向下平移，避免放大後頭頂真的貼到邊框 */
  transform-origin: top center; 
  
  position: absolute;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* 預設隱藏影片 */
.hover-video {
  opacity: 0;
}

/* 4. 右側直排文字 */
.side-text {
  position: absolute;
  top: 0;
  left: 235px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  
  display: flex;
  align-items: center; /* 讓文字在垂直軸線上對齊中心 */
  
  color: #000;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s ease;
  white-space: nowrap;

  // 上面的小字
  .small-title {
    font-size: 36px;    // 較小的字級
    font-weight: 300;
    letter-spacing: 0.1em;
    margin-bottom: 5px; // 藝文與展覽之間的間距
  }

  // 下面的大字
  .big-title {
    font-size: 40px;    // 較大的字級（如圖片效果）
    font-weight: 900;   // 加粗
    letter-spacing: 0.2em;
  }
}

/* 5. Hover 觸發效果 */

/* 滑入時：隱藏圖片，顯示影片 */
.character-card:hover .static-img {
  opacity: 0;
}

.character-card:hover .hover-video {
  opacity: 1;
}

/* 滑入時：顯示直排文字並歸位 */
.character-card:hover .side-text {
  opacity: 1;
  transform: translateX(0);
}

.icon-circle {
  width: 68px;
  height: 68px;
  border-radius: var(--border-radius-pill);
  background-color: #e4e0ddff;
  cursor: pointer;
  &:hover {
    background-color: #d1ccc7ff;
  }
}

.icon-illustration {
  width: 89px;
}

.author img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 99px;
}

.card-news {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}

.card-events {
  border-radius: 16px;
  border: solid #d2d2d2;
  overflow: hidden;
  cursor: pointer;
}

.card-text {
  font-size: var(--h6-font-size);
  color: var(--text-default-secondary);
}

.container {
  max-width: 1320px;
}

// footer
.footer {
  width: 100%;
  color: #000; // 深色文字
}

/* 左右留白 120px 的容器 */
.footer-container {
  padding: 60px 120px;
  max-width: 1440px;
  margin: 0 auto;
}

.footer-top {
  background-color: #f6f2ef;
}

.footer-bottom {
  height: 80px;
  background-color: #ebe8e6ff;

  p {
    font-size: 14px;
    color: #000;
  }
}

.footer-links-group {
  ul li {
    margin-bottom: 20px;

    a {
      text-decoration: none;
      color: inherit;
      font-size: 16px;

      &:hover {
        color: #636366ff;
      }
    }
  }
}

.footer-logo img {
  height: 36px; // 依照 Logo 比例微調
  width: auto;
}
</style>
