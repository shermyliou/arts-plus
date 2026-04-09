<script setup>
import { onMounted } from "vue"; // 必須引入 onMounted
import BootstrapChecker from "./BootstrapChecker.vue";
import SideBar from "../components/common/SideBar.vue";
import navbar from "../components/common/navbar.vue";

onMounted(() => {
  // 確保在 DOM 渲染完成後才抓取元素
  const cards = document.querySelectorAll(".character-card");

  cards.forEach((card) => {
    const video = card.querySelector(".hover-video");

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
  });
});
</script>

<template>
  <div>
    <nav>
      <navbar />
    </nav>
    <main class="main-container">
      <div class="character-grid">
        <div class="character-card">
          <div class="media-container">
            <img src="/images/char1.png" alt="角色3" class="static-img" />
            <video
              src="/images/char1.mp4"
              class="hover-video"
              muted
              loop
              playsinline
            ></video>
          </div>
          <div class="side-text">
            <span class="small-title">藝文</span>
            <span class="big-title">體驗</span>
          </div>
        </div>

        <div class="character-card">
          <div class="media-container">
            <img src="/images/char2.png" alt="" class="static-img" />
            <video
              src="/images/char1.mp4"
              class="hover-video"
              muted
              loop
              playsinline
            ></video>
          </div>
          <div class="side-text">
            <span class="small-title">藝文</span>
            <span class="big-title">小旅遊</span>
          </div>
        </div>

        <div class="character-card">
          <div class="media-container">
            <img src="/images/char3.png" alt="" class="static-img" />
            <video
              src="/images/char3.mp4"
              class="hover-video"
              muted
              loop
              playsinline
            ></video>
          </div>
          <div class="side-text">
            <span class="small-title">藝文</span>
            <span class="big-title">展覽</span>
          </div>
        </div>

        <div class="character-card">
          <div class="media-container">
            <img src="/images/char4.png" alt="" class="static-img" />
            <video
              src="/images/char4.mp4"
              class="hover-video"
              muted
              loop
              playsinline
            ></video>
          </div>
          <div class="side-text">
            <span class="small-title">藝文</span>
            <span class="big-title">演出</span>
          </div>
        </div>

        <div class="character-card">
          <div class="media-container">
            <img src="/images/char5.png" alt="" class="static-img" />
            <video
              src="/images/char5.mp4"
              class="hover-video"
              muted
              loop
              playsinline
            ></video>
          </div>
          <div class="side-text">
            <span class="small-title">藝文</span>
            <span class="big-title">演講</span>
          </div>
        </div>
      </div>
    </main>

    <div class="container">
      <div class="category-nav d-flex justify-content-between py-5">
        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img
              src="/images/icon/material-symbols-light_wall-art-outline-rounded.svg"
              alt=""
            />
          </div>
          <span class="icon-label">藝文展覽</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img src="/images/icon/ph_mask-happy.svg" alt="" />
          </div>
          <span class="icon-label">藝文演出</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img src="/images/icon/solar_ruler-pen-linear.svg" alt="" />
          </div>
          <span class="icon-label">藝文體驗</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img src="/images/icon/healthicons_forum-outline.svg" alt="" />
          </div>
          <span class="icon-label">藝文講座</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img src="/images/icon/hugeicons_backpack-03.svg" alt="" />
          </div>
          <span class="icon-label">藝文小旅遊</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <div
            class="icon-circle d-flex justify-content-center align-items-center"
          >
            <img src="/images/icon/streamline-ultimate_laptop.svg" alt="" />
          </div>
          <span class="icon-label">線上展覽</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <img
            src="/images/icon/IMG_1974.PNG"
            class="icon-illustration"
            alt=""
          />
          <span class="icon-label">藝文足跡</span>
        </div>

        <div class="category-item d-flex flex-column gap-3 align-items-center">
          <img
            src="/images/icon/IMG_1973.PNG"
            class="icon-illustration"
            alt=""
          />
          <span class="icon-label">藝文地圖</span>
        </div>
      </div>

      <div class="d-flex flex-column gap-4 py-5">
        <h2>最新消息</h2>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column gap-4 py-5">
        <h2>近期活動</h2>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-top d-flex align-items-center">
        <div
          class="footer-container d-flex justify-content-between align-items-top w-100"
        >
          <div class="footer-logo">
            <img src="/images/ArtPlusLogo.png" alt="ART+" />
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
        </div>
      </div>

      <div
        class="footer-bottom d-flex align-items-center justify-content-center"
      >
        <p class="m-0">© Copyright 2026. ART+ All Right Reserved</p>
      </div>
    </footer>

    <div class="row d-flex">
      <aside>
        <SideBar />
      </aside>
      <main>
        <Search />
        <BootstrapChecker />
      </main>
      <aside></aside>
    </div>

    <EventDetail></EventDetail>

    <footer></footer>
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
