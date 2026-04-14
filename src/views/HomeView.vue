<script setup>
import { onMounted } from "vue"; // 必須引入 onMounted

onMounted(() => {
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

    //   card.addEventListener("mouseleave", () => {
    //     video.pause();
    //   });
    // }

</script>

<template>
  <div>
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
              <div class="card-body p-3 d-flex flex-column gap-2">
                <h5 class="card-title">年底暫別臺北當代藝術館</h5>
                <p class="card-text line-clamp-4">
                  臺北當代藝術館將於2027年1月起展開長達3年的古蹟大規模整修。暫別之前以「溫柔道別」為主題，規畫了5檔重量級展覽與街區藝術計畫。
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">臺北當代藝術館</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3 d-flex flex-column gap-2">
                <h5 class="card-title">跨域創新藝術專案申請</h5>
                <p class="card-text line-clamp-4">
                  財團法人國家文化藝術基金會獎勵文學、視覺藝術、音樂等多元藝術專案開始申請囉～申請期間2026年4月15 16:26 至 5月5日 23:59，千萬別錯過！
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">財團法人國家文化藝術基金會</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3 d-flex flex-column gap-2">
                <h5 class="card-title">2026 爵對有春</h5>
                <p class="card-text line-clamp-4">
                  由高雄流行音樂中心舉辦，以爵士音樂為主題。2座舞台、3大主題、4部電影、16組演出卡司，超過80攤特色市集，最適合全家大小出遊！
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">高雄流行音樂中心</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3 d-flex flex-column gap-2">
                <h5 class="card-title">親子手作QQ動物執頭偶e</h5>
                <p class="card-text line-clamp-4">
                  週末不曉得帶小孩去哪裡放電？來臺北偶戲館手作「QQ動物執頭偶」，讓孩子創造屬於自己的第一個執頭偶，有獅子、大象、小豬，任君挑選～
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">臺北偶戲館</p>
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
            <div class="card-body p-3 d-flex flex-column gap-2">
              <h5 class="card-title">親子音樂劇場 <br>《魔笛》</h5>
              <p class="card-text">2026/4/12</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3 d-flex flex-column gap-2">
              <h5 class="card-title">果陀劇場 <br>《解憂雜貨店》</h5>
              <p class="card-text">2026/4/24~6/21</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3 d-flex flex-column gap-2">
              <h5 class="card-title">果陀劇場 <br>《生命中最美好的5分鐘》</h5>
              <p class="card-text">2026/5/23 ~7/12</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3 d-flex flex-column gap-2">
              <h5 class="card-title">果陀劇場 <br>《深夜小狗神秘習題》</h5>
              <p class="card-text">2026/5/29~8/2</p>
            </div>
          </div>
        </div>
      </div>
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

// 角色排版區
.character-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px 180px;
  max-width: 1200px;
}
// 角色方框
.character-card {
  position: relative;
  width: 220px;
  height: 220px;
  background-color: #ffdd1dff;
  border: 2px solid #000000;
  cursor: pointer;
}

// 媒體容器（靜態圖與影片）
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

  object-position: top center;

// 放大比例
  transform: scale(1.7);

  transform-origin: top center;

  position: absolute;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

/* 預設隱藏影片 */
.hover-video {
  opacity: 0;
}

// 右側直排文字
.side-text {
  position: absolute;
  top: 0;
  left: 235px;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  display: flex;
  align-items: center;

  color: #000;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s ease;
  white-space: nowrap;

  // 上面的小字
  .small-title {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 0.1em;
    margin-bottom: 5px;
  }

  // 下面的大字
  .big-title {
    font-size: 40px; 
    font-weight: 900;
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

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
