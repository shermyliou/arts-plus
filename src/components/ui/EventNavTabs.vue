<script setup>
const props = defineProps(['tabs', 'activeTab']);
const emit = defineEmits(['update:activeTab']);

const handleTabClick = (e, tab) => {
  e.preventDefault();
  emit('update:activeTab', tab.name);

  const element = document.querySelector(tab.id);
  if (element) {
    const offset = 120; // 考慮 Sticky Navbar + Tabs 的總高度補償
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="nav-wrapper">
    <ul class="nav nav-pills custom-nav-pills">
      <li class="nav-item" v-for="tab in tabs" :key="tab.name">
        <a 
          class="nav-link" 
          :class="{ active: activeTab === tab.name }"
          href="javascript:void(0)" 
          @click="handleTabClick($event, tab)"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/tokens/_primitive.scss";

:deep(.event-layout__main) {
  overflow: visible !important;
}

.nav-wrapper {
  position: sticky;
  top: 64px; // 假設頂部 Navbar 高度為 64px，請依實際情況調整
  z-index: 1020; // 高於一般內容，確保浮動在 HeroCard 之上
  margin: 0;
  padding: 16px 0;
  background-color: var(--background-default-default); // 確保捲動時背景不透明
  width: 100%;

  .custom-nav-pills {
    display: flex; // 移除 inline-flex
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 50px;
    padding: 4px; // 給予內距讓選中狀態(active)有呼吸空間
    list-style: none;
    border: 1px solid var(--border-default-default);
    overflow: hidden;
    margin-bottom: 0;

    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1; // 均分空間
      min-width: 0;

      &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: 0;
        top: 25%;
        height: 50%;
        width: 1px;
        background-color: #ddd;
        z-index: 1;
      }
    }

    .nav-link {
      width: 100%;
      border: none;
      padding: 10px 16px;
      color: #666;
      font-size: 14px; // 依照需求調整至 14px
      font-weight: 500;
      text-align: center;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      white-space: nowrap;
      border-radius: 50px; // 每個連結都保持膠囊狀
      display: flex;
      justify-content: center;
      align-items: center;

      // 樣式還原：選中狀態黑底白字
      &.active {
        background-color: $brand-700 !important;
        color: #fff !important;
        z-index: 2;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      &:hover:not(.active) {
        background-color: rgba(0,0,0,0.05);
      }
    }
  }
}

// RWD 捲動修復
@media (max-width: 768px) {
  .nav-wrapper {
    top: 56px; // 手機版 Navbar 通常較矮
    padding: 8px 0;
  }

  .custom-nav-pills {
    overflow-x: auto;
    flex-wrap: nowrap; // 禁止換行
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    padding: 4px;
    border-radius: 12px; // 手機版稍微減小圓角增加空間利用

    &::-webkit-scrollbar {
      display: none;
    }

    .nav-item {
      flex: 0 0 auto; // 不縮減，依文字寬度展開
      width: auto;

      &::after {
        display: none; // 手機版捲動時隱藏分割線更簡潔
      }
    }

    .nav-link {
      padding: 8px 20px;
    }
  }
}
</style>