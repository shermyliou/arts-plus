<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

/**
 * @typedef {Object} myFilterItem
 * @property {string} label - 篩選標籤名稱
 * @property {string} icon - Iconify 圖標代碼
 * @property {boolean} isOpen - 是否展開
 */

/** @type {import('vue').Ref<myFilterItem[]>} */
const filters = ref([
  { label: '活動時間', icon: 'ph:mask-happy', isOpen: false },
  { label: '縣市', icon: 'ph:mask-happy', isOpen: false },
  { label: '排除票種', icon: 'ph:mask-happy', isOpen: false },
  { label: '親子與無障礙', icon: 'ph:mask-happy', isOpen: false },
  { label: '展覽類型', icon: 'ph:mask-happy', isOpen: false },
  { label: '傳統表演藝術類型', icon: 'ph:mask-happy', isOpen: false },
  { label: '戲劇類型', icon: 'ph:mask-happy', isOpen: false },
  { label: '舞蹈類型', icon: 'ph:mask-happy', isOpen: false },
  { label: '音樂類型', icon: 'ph:mask-happy', isOpen: false },
]);

/**
 * 切換篩選項目的展開狀態
 * @param {number} index - 項目索引
 */
const toggleFilter = (index) => {
  filters.value[index].isOpen = !filters.value[index].isOpen;
};
</script>

<template>
  <aside class="filter-sidebar h-100">
    <div v-for="(filter, index) in filters" :key="filter.label" class="filter-group">
      <div v-if="index > 0" class="filter-divider mx-3"></div>
      <button 
        class="filter-header w-100 d-flex align-items-center justify-content-between border-0 bg-transparent py-2 ps-4 pe-2"
        @click="toggleFilter(index)"
      >
        <div class="d-flex align-items-center gap-2">
          <Icon :icon="filter.icon" width="20" height="20" class="filter-icon" />
          <span class="filter-label text-nowrap">{{ filter.label }}</span>
        </div>
        <Icon 
          :icon="filter.isOpen ? 'ph:caret-up' : 'ph:caret-right'" 
          width="20" 
          height="20" 
          class="arrow-icon" 
        />
      </button>

      <!-- Placeholder for filter content when expanded -->
      <div v-if="filter.isOpen" class="filter-content ps-4 pe-2 pb-3">
        <!-- Content will go here -->
        <p class="text-muted small">篩選內容尚未實作</p>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.filter-sidebar {
  background-color: var(--background-default-secondary);
  width: 280px;
  min-width: 280px;
  overflow-y: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}

.filter-header {
  min-height: 48px;
  color: var(--text-default-default);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--background-default-secondary-hover) !important;
  }

  .filter-icon {
    color: var(--icon-default-tertiary);
    opacity: 0.5;
  }

  .filter-label {
    font-size: 16px;
    letter-spacing: 0.16px;
    font-weight: 400;
    line-height: 1.5;
    font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
  }

  .arrow-icon {
    color: var(--icon-default-default);
  }
}

.filter-divider {
  height: 1px;
  background-color: var(--border-default-secondary);
  opacity: 0.5;
}

.filter-content {
  background-color: transparent;
}
</style>
