<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const tabs = ref([
  { name: "首頁", badgeCount: 0, path: "/" },
  { name: "搜尋結果", badgeCount: 0, path: "/search" },
  { name: "活動介紹", badgeCount: 0, path: "/event/:id" },
  { name: "藝文地圖", badgeCount: 0, path: "/map" },
  { name: "活動編輯", badgeCount: 0, path: "/organizer" },
  { name: "Bootstrap檢查器", badgeCount: 0, path: "/bootstrap" },
]);
</script>

<template>
  <div class="floating-nav-container shadow-lg">
    <ul class="nav nav-pills custom-nav-pills justify-content-center overflow-y-hidden h-100">
      <li v-for="tab in tabs" :key="tab.name" class="nav-item">
        <RouterLink
          class="nav-link d-flex align-items-center justify-content-center gap-1 h-100"
          exact-active-class="active"
          :to="tab.path"
        >
          <span class="tab-text">{{ tab.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.floating-nav-container {
  position: fixed;
  height: 54px;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  z-index: 2000;
  width: auto;
  max-width: 90vw;

  @media (max-width: 768px) {
    bottom: 16px;
    width: calc(100% - 32px);
  }
}

.custom-nav-pills {
  flex-wrap: wrap; // 確保在窄螢幕上會換行
  padding: 4px; // 容器內邊距
  border-radius: 8px;

  .nav-link {
    white-space: normal; // 允許文字換行
    font-size: 14px;
    padding: 0.1em 0.25em; // 增加內部邊距
    &>span{
      vertical-align: center;

    }

    &.active {
      height: 100%;
      border-radius: 8px;
    }
  }
}

.tab-text {
  display: inline-block;
  vertical-align: center;
  text-align: center;
  max-width: 100px; // 限制寬度以利換行測試
}
</style>
