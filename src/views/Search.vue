<script setup>
import HorizontalEventCard from '@/components/ui/HorizontalEventCard.vue';
import CalendarView from '@/components/ui/CalendarView.vue';
import FilterSidebar from '@/components/ui/FilterSidebar.vue';
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { useEventStore } from '@/stores/useEventStore';

const eventStore = useEventStore();
const searchQuery = ref('');

const tabs = computed(() => [
  { name: "全部", badgeCount: eventStore.events.length },
  { name: "藝文展覽", badgeCount: eventStore.events.filter(e => e.category === '藝文展覽').length },
  { name: "藝文演出", badgeCount: eventStore.events.filter(e => e.category === '藝文演出').length },
  { name: "藝文體驗", badgeCount: eventStore.events.filter(e => e.category === '藝文體驗').length },
  { name: "藝文講座", badgeCount: eventStore.events.filter(e => e.category === '藝文講座').length },
  { name: "藝文小旅遊", badgeCount: eventStore.events.filter(e => e.category === '藝文小旅遊').length },
  { name: "線上展覽", badgeCount: eventStore.events.filter(e => e.category === '線上展覽').length },
]);

const activeTab = ref("全部");

const filteredEvents = computed(() => {
  let results = eventStore.events;

  if (activeTab.value !== '全部') {
    results = results.filter(e => e.category === activeTab.value);
  }

  if (searchQuery.value) {
    results = results.filter(e => e.title.includes(searchQuery.value));
  }

  return results;
});

const sortOptions = ref([
  '日期：近到遠',
  '日期：遠到近',
  '價格：低到高',
  '價格：高到低',
  '最新'
]);

const currentSort = ref('日期：近到遠');

/**
 * 格式化價格範圍顯示
 * @param {Object} price 
 * @returns {String}
 */
const formatPrice = (price) => {
  if (!price) return '免費';
  if (price.min === 0 && price.max === 0) return '免費';
  return `NT$ ${price.min.toLocaleString()} - ${price.max.toLocaleString()}`;
};

/**
 * 格式化日期範圍顯示
 * @param {String} start 
 * @param {String} end 
 * @returns {String}
 */
const formatDateRange = (start, end) => {
  if (!start) return '';
  if (start === end) return start.replace(/-/g, '/');
  return `${start.replace(/-/g, '/')} - ${end.replace(/-/g, '/')}`;
};
</script>

<template>
  <div class="search-page-container d-flex">
    <!-- Left Sidebar: Filters -->
    <FilterSidebar class="sidebar"></FilterSidebar>

    <!-- Main Content Area -->
    <div class="search-content flex-grow-1 d-flex flex-column pt-4 px-4 overflow-y-auto g-3">

      <!-- Calendar View Section -->
      <!-- <div class="position-fixed winherit"> -->
      <!-- <CalendarView /> -->
      <!-- </div> -->

      <!-- Fixed Header Section -->
      <div class="fixed-header-section w-100 row g-0 flex-nowrap justify-content-between align-items-center">

        <button class="btn btn-outline-secondary w-auto text-nowrap sidebar-toggle" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <Icon icon="ph:funnel" width="1em" height="1em" />
          篩選
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">篩選器</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <FilterSidebar />
          </div>
        </div>
        <!-- Search Bar Section -->
        <!-- <div class="row mb-4 justify-content-center sticky-top topnav"> -->
        <!-- <div class="col-12 d-flex gap-2 align-items-center"> -->
        <!-- Search Input Container -->
        <!-- <div class="search-input-container flex-grow-1 d-flex align-items-center px-3 py-2"> -->
        <!-- <Icon icon="ph:magnifying-glass" width="24" height="24" class="search-icon" /> -->
        <!-- <input 
                v-model="searchQuery"
                type="text" 
                class="search-input border-0 bg-transparent flex-grow-1 ms-2" 
                placeholder="搜尋" 
              /> -->
        <!-- </div> -->
        <!-- Search Button -->
        <!-- <button class="btn btn-search rounded-pill px-4 py-2"> -->
        <!-- 搜尋 -->
        <!-- </button> -->
        <!-- </div> -->
        <!-- </div> -->

        <!-- Nav Tabs Section -->
        <ul class="nav nav-pills overflow-x-auto flex-shrink-1">
          <li v-for="tab in tabs" :key="tab.name" class="nav-item">
            <a class="nav-link d-flex align-items-center justify-content-center gap-1"
              :class="{ active: activeTab === tab.name }" href="#" @click.prevent="activeTab = tab.name">
              <span class="tab-text">{{ tab.name }}</span>
              <span v-if="tab.badgeCount > 0" class="badge rounded-pill bg-danger">
                {{ tab.badgeCount }}
              </span>
            </a>
          </li>
        </ul>
        <!-- Filter/Sort Section -->
        <div class="col-2 d-flex justify-content-end">
          <div class="dropdown">
            <button class="btn btn-sort-dropdown dropdown-toggle" type="button" id="sortDropdown"
              data-bs-toggle="dropdown" aria-expanded="false">
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
                <a class="dropdown-item" href="#" @click.prevent="currentSort = option"
                  :class="{ active: currentSort === option }">
                  {{ option }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Results Section (Scrollable Area) -->
      <div class="results-scroll-area d-flex flex-column overflow-y-auto">
        <div v-for="event in filteredEvents" :key="event.id">
          <HorizontalEventCard :title="event.title" :category="event.category" :rating="event.rating"
            :ticket-status="event.ticketStatus" :time="formatDateRange(event.startDate, event.endDate)"
            :location="`${event.city} ${event.venue}`" :price-range="formatPrice(event.price)"
            :image="event.imageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-toggle {
    display: none; 
  }

.fixed-header-section {
  gap: var(--main-gap-x);
}
  
@media (max-width: 768px) {
  .sidebar{
    display: none;
  }

  .sidebar-toggle {
    display: flex;
    align-items: center;
    flex-shrink: 1;
  }
}

  .custom-nav-pills>.nav-item>.nav-link.active {
    background-color: var(--background-brand-hover);
    color: var(--text-brand-on-brand);
  }

.search-page-container {
  // max-width: var(--main-container-max-width);
  height: 100vh;
}

.search-content {
  height: 100%;
  gap: var(--main-gap-y-large);
}

.results-scroll-area {
  min-height: 0; // Essential for flex-grow with overflow
  gap: var(--main-gap-x);

  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: var(--text-default-tertiary);
  }
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

  &.show {
    inset: 0px 0px auto auto !important;
  }

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

.winherit {
  width: inherit;
}
</style>
