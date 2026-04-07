<script setup>
import HorizontalEventCard from '@/components/ui/HorizontalEventCard.vue';
import CalendarView from '@/components/ui/CalendarView.vue';
import FilterSidebar from '@/components/ui/FilterSidebar.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const searchQuery = ref('');

const tabs = ref([
  { name: "全部", badgeCount: 0 },
  { name: "藝文展覽", badgeCount: 0 },
  { name: "藝文演出", badgeCount: 0 },
  { name: "藝文體驗", badgeCount: 0 },
  { name: "藝文講座", badgeCount: 0 },
  { name: "藝文小旅遊", badgeCount: 0 },
  { name: "線上展覽", badgeCount: 0 },
]);

const activeTab = ref("藝文演出");

const sortOptions = ref([
  '日期：近到遠',
  '日期：遠到近',
  '價格：低到高',
  '價格：高到低',
  '最新'
]);

const currentSort = ref('日期：近到遠');
</script>

<template>
  <div class="search-page-container d-flex h-100">
    <!-- Left Sidebar: Filters -->
    <FilterSidebar />

    <!-- Main Content Area -->
    <div class="search-content flex-grow-1 py-4 px-4 overflow-auto">
      <!-- Search Bar Section (3004:18517) -->
      <div class="row mb-4 justify-content-center">
        <div class="col-12 d-flex gap-2 align-items-center">
          <!-- Search Input Container -->
          <div class="search-input-container flex-grow-1 d-flex align-items-center px-3 py-2">
            <Icon icon="ph:magnifying-glass" width="24" height="24" class="search-icon" />
            <input 
              v-model="searchQuery"
              type="text" 
              class="search-input border-0 bg-transparent flex-grow-1 ms-2" 
              placeholder="搜尋" 
            />
          </div>
          <!-- Search Button -->
          <button class="btn btn-search rounded-pill px-4 py-2">
            搜尋
          </button>
        </div>
      </div>

      <!-- Nav Tabs Section (3437:23052) -->
      <div class="row mb-4">
        <div class="col-12">
          <ul class="nav nav-pills custom-nav-pills">
            <li v-for="tab in tabs" :key="tab.name" class="nav-item">
              <a
                class="nav-link d-flex align-items-center justify-content-center gap-1"
                :class="{ active: activeTab === tab.name }"
                href="#"
                @click.prevent="activeTab = tab.name"
              >
                <span class="tab-text">{{ tab.name }}</span>
                <span v-if="tab.badgeCount > 0" class="badge rounded-pill bg-danger badge-sm">
                  {{ tab.badgeCount }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Filter/Sort Section (3004:18637) -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="dropdown">
            <button 
              class="btn btn-sort-dropdown dropdown-toggle" 
              type="button" 
              id="sortDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <div class="sort-header">
                <div class="sort-title-area">
                  <div class="sort-icon-wrapper">
                    <Icon icon="ph:sort-ascending" width="20" height="20" class="sort-icon" />
                  </div>
                  <span class="sort-text">排序</span>
                </div>
                <Icon icon="ph:caret-up" width="16" height="16" class="caret-icon" />
              </div>
            </button>
            <ul class="dropdown-menu sort-dropdown-menu" aria-labelledby="sortDropdown">
              <li v-for="option in sortOptions" :key="option">
                <a 
                  class="dropdown-item" 
                  href="#" 
                  @click.prevent="currentSort = option"
                  :class="{ active: currentSort === option }"
                >
                  {{ option }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Calendar View Section (2830:17660) -->
      <div class="row mb-4">
        <div class="col-12">
          <CalendarView />
        </div>
      </div>

      <!-- Results Section -->
      <div class="row">
        <div class="col-12">
          <HorizontalEventCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-page-container {
  height: calc(100vh - var(--component-navbar-height));
}

.search-content {
  max-width: var(--main-container-max-width);
}

// Search Input (3004:18517)
.search-input-container {
  background-color: var(--background-default-default); // #fafaf9
  border: 1px solid var(--border-default-default); // #d9d9d9 (close to #d1d1d6)
  border-radius: var(--border-radius-pill);
  min-height: 40px;

  .search-icon {
    color: var(--icon-default-tertiary); // #aeaeb2
  }

  .search-input {
    font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.48px;
    color: var(--text-default-default);
    outline: none;

    &::placeholder {
      color: var(--text-default-tertiary); // #aeaeb2
    }
  }
}

// Search Button (3004:18517 / 3004:18518)
.btn-search {
  border: 1px solid var(--border-brand-secondary) !important; // #444
  color: var(--text-brand-on-brand-secondary); // #413d3a
  font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1.92px;
  padding: 16px 28px !important;
  line-height: 1.4;
  white-space: nowrap;
  background-color: transparent;

  &:hover {
    background-color: var(--background-default-default-hover);
  }
}

// Sort Button (3004:18637)
.btn-sort {
  border: 1px solid var(--border-brand-secondary) !important; // #444
  padding: 16px 24px !important;
  color: var(--text-brand-on-brand-secondary); // #413d3a
  line-height: 1.4;
  background-color: transparent;

  .sort-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px; // As per Figma icon container size
    height: 12px;
  }

  .sort-text {
    font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.68px;
    white-space: nowrap;
  }

  &:hover {
    background-color: var(--background-default-default-hover);
  }
}

// Sort Dropdown Button (3437:28340)
.btn-sort-dropdown {
  border: 1px solid var(--border-default-default) !important;
  background-color: transparent;
  border-radius: var(--border-radius-1);
  padding: 0 !important;
  width: 136px;
  min-height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--background-default-secondary-hover);
  }

  &::after {
    display: none; // Remove bootstrap default arrow
  }

  .sort-header {
    width: 100%;
    height: 40px;
    padding: 8px 8px 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sort-title-area {
      display: flex;
      align-items: center;
      gap: 6px;
      
      .sort-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sort-icon {
        color: var(--text-default-default);
      }

      .sort-text {
        font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: var(--text-default-default);
      }
    }

    .caret-icon {
      color: var(--text-default-default);
      margin-left: 12px;
    }
  }
}

.sort-dropdown-menu {
  width: 136px;
  padding: 0;
  border: 1px solid var(--border-default-default);
  border-radius: var(--border-radius-1);
  margin-top: 4px;
  box-shadow: none;
  background-color: var(--background-default-default);

  .dropdown-item {
    height: 28px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.14px;
    color: var(--text-default-default);
    
    // Space for check icon if we want to add it later, matching Figma "filter item long"
    &::before {
      content: '';
      width: 24px;
      height: 24px;
      margin-right: 4px;
      display: inline-block;
      flex-shrink: 0;
    }

    &:hover {
      background-color: var(--background-default-secondary-hover);
    }

    &.active {
      background-color: var(--background-default-secondary-hover);
      color: var(--text-default-default);
    }
  }
}
</style>
