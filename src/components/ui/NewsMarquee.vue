<script setup>
import { Icon } from '@iconify/vue';

/**
 * NewsMarquee - 消息跑馬燈組件
 * 提供標題與無限捲動的消息文字內容。
 */
defineProps({
  news: {
    type: String,
    default: '英國國家劇院（NT）最叫好叫座的作品，橫掃 7 座奧利佛獎、5 座東尼獎，創造劇場歷史，2026年果陀劇場將以中文版全新製作！ 一部關於真相與冒險的動人作品，走進天才少年的數學宇宙，展開改變人生的偵探旅程！'
  }
});
</script>

<template>
  <div class="news-marquee">
    <!-- 固定標題區 -->
    <div class="news-marquee__label">
      <!-- <Icon icon="ph:pin-angle-fill" class="news-marquee__icon" /> -->
      <Icon icon="ph:push-pin-fill" width="20" height="20" />
      <span class="news-marquee__title">最新消息</span>
    </div>

    <!-- 跑馬燈捲動區 -->
    <div class="news-marquee__content-wrapper">
      <div class="news-marquee__track">
        <p class="news-marquee__text">{{ news }}</p>
        <!-- 複製一份以達成無縫循環 -->
        <p class="news-marquee__text" aria-hidden="true">{{ news }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/tokens/_primitive.scss";
@import "@/assets/styles/tokens/_semantic.scss";

.news-marquee {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: var(--background-default-default);
  //border: 1px solid var(--border-default-default);
  //border-radius: $border-radius-pill;
  padding: 0 ;
  overflow: hidden;
  width: 100%;
  gap: 12px;

  &__label {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    color: var(--text-default-default);
  }

  &__icon {
    font-size: 16px;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }

  &__content-wrapper {
    flex: 1;
    overflow: hidden;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    // 滑鼠懸停時暫停動畫
    &:hover .news-marquee__track {
      animation-play-state: paused;
    }
  }

  &__track {
    display: flex;
    white-space: nowrap;
    width: fit-content;
    animation: marquee 60s linear infinite;
  }

  &__text {
    margin: 0;
    padding-right: 50px; // 文字間距
    font-size: 14px;
    color: var(--text-brand-secondary);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

// RWD 處理
@media (max-width: 768px) {
  .news-marquee {
    padding: 0 12px;
    
    &__title {
      font-size: 14px;
    }
    
    &__text {
      font-size: 13px;
    }
  }
}
</style>