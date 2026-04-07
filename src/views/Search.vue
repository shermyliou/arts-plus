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
          <button class="btn btn-sort rounded-pill d-inline-flex align-items-center gap-2">
            <div class="sort-icon-wrapper">
              <Icon icon="ph:funnel-simple" width="16" height="16" />
            </div>
            <span class="sort-text">排序</span>
          </button>
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
</style>
