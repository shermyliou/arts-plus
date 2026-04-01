<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

/**
 * @typedef {Object} myNavItem
 * @property {string} name - 導航名稱
 * @property {string} icon - Iconify 圖標代碼
 * @property {string} path - 路由路徑
 */

/** @type {myNavItem[]} */
const navItems = [
  { name: '首頁', icon: 'ph:house-bold', path: '/' },
  { name: '探索地圖', icon: 'ph:map-trifold-bold', path: '/map' },
  { name: '藝文活動', icon: 'ph:calendar-blank-bold', path: '/events' },
  { name: '我的收藏', icon: 'ph:heart-bold', path: '/favorites' },
  { name: '個人設定', icon: 'ph:gear-six-bold', path: '/settings' },
];

const activePath = ref('/map');

/**
 * 處理導航點擊事件，切換目前選中狀態
 * @param {string} path 
 */
const handleNavClick = (path) => {
  activePath.value = path;
};


</script>

<template>
   <div>
    
  </div>
  <aside class="sidebar-container d-flex flex-column vh-100 bg-white border-end">
    <!-- 品牌標誌區域 -->
    <div class="logo-wrapper d-flex align-items-center px-4 py-4">
      <div class="logo-icon bg-primary rounded-3 d-flex align-items-center justify-content-center me-2">
        <Icon icon="ph:paint-brush-broad-fill" class="text-white" width="24" height="24" />
      </div>
      <span class="fs-4 fw-bold text-dark logo-text">Art+</span>
    </div>

    <!-- 導航選單區域 -->
    <nav class="nav-menu flex-grow-1 px-3">
      <ul class="nav nav-pills flex-column gap-2">
        <li v-for="item in navItems" :key="item.path" class="nav-item">
          <a 
            href="#" 
            class="nav-link d-flex align-items-center gap-3 py-3 px-3"
            :class="{ 'active': activePath === item.path }"
            @click.prevent="handleNavClick(item.path)"
          >
            <Icon :icon="item.icon" width="22" height="22" />
            <span class="nav-label fw-medium">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 底部用戶資訊區塊 -->
    <div class="user-profile border-top p-4">
      <div class="d-flex align-items-center gap-3">
        <div class="avatar rounded-circle bg-light d-flex align-items-center justify-content-center border">
          <Icon icon="ph:user-bold" class="text-secondary" width="20" height="20" />
        </div>
        <div class="user-info overflow-hidden">
          <p class="mb-0 fw-semibold text-dark text-truncate">藝文愛好者</p>
          <small class="text-muted text-truncate d-block">artlover@example.com</small>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-container {
  width: 260px;
  transition: all 0.3s ease;
  z-index: 1000;

  .logo-icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .nav-link {
    color: #64748b;
    border-radius: 12px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #f8fafc;
      color: var(--bs-primary);
    }

    &.active {
      background-color: var(--bs-primary);
      color: white;
      box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.25);
    }
  }

  .avatar {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }
}


</style>
