<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const tabs = ref([
  { name: "首頁", badgeCount: 0, path: "/" },
  { name: "搜尋結果", badgeCount: 0, path: "/search" },
  { name: "活動介紹", badgeCount: 0, path: "/event/:id" },
  { name: "藝文地圖", badgeCount: 0, path: "/map" },
  { name: "主辦方_活動編輯", badgeCount: 0, path: "/organizer" },
  { name: "Bootstrap檢查器", badgeCount: 0, path: "/bootstrap" },
]);
</script>

<template>
  <div class="floating-nav-container shadow-lg">
    <ul class="nav nav-pills custom-nav-pills justify-content-center">
      <li v-for="tab in tabs" :key="tab.name" class="nav-item">
        <RouterLink
          class="nav-link d-flex align-items-center justify-content-center gap-1"
          exact-active-class="active"
          :to="tab.path"
        >
          <span class="tab-text">{{ tab.name }}</span>
          <span v-if="tab.badgeCount > 0" class="badge rounded-pill bg-danger badge-sm">
            {{ tab.badgeCount }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.floating-nav-container {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--background-default-default);
  border-radius: 50px;
  padding: 8px 16px;
  z-index: 2000;
  width: auto;
  max-width: 90vw;
  border: 1px solid var(--border-default-secondary);

  @media (max-width: 768px) {
    bottom: 16px;
    border-radius: 24px;
    width: calc(100% - 32px);
    padding: 12px;
  }
}

.custom-nav-pills {
  flex-wrap: wrap; // 確保在窄螢幕上會換行
  
  .nav-item {
    margin: 4px;
  }

  .nav-link {
    white-space: normal; // 允許文字換行
    text-align: center;
    font-size: 12px;
    color: var(--text-default-secondary);
    
    &.active {
      background-color: var(--background-brand-default);
      color: var(--text-brand-on-brand);
    }
  }
}

.tab-text {
  display: inline-block;
  max-width: 100px; // 限制寬度以利換行測試
}
</style>
