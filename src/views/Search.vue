<script setup>
import HorizontalEventCard from '@/components/ui/HorizontalEventCard.vue';
import CalendarView from '@/components/ui/CalendarView.vue';
import FilterSidebar from '@/components/ui/FilterSidebar.vue';
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { useEventStore } from '@/stores/useEventStore';

const eventStore = useEventStore();
const searchQuery = ref('');
const showCalendar = ref(false);

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
};

const tabs = computed(() => [
  { name: "全部", badgeCount: eventStore.events.length },
  { name: "藝文展覽", badgeCount: eventStore.events.filter(e => e.majorCategory === '藝文展覽').length },
  { name: "藝文演出", badgeCount: eventStore.events.filter(e => e.majorCategory === '藝文演出').length },
  { name: "藝文體驗", badgeCount: eventStore.events.filter(e => e.majorCategory === '藝文體驗').length },
  { name: "藝文講座", badgeCount: eventStore.events.filter(e => e.majorCategory === '藝文講座').length },
  { name: "藝文小旅遊", badgeCount: eventStore.events.filter(e => e.majorCategory === '藝文小旅遊').length },
  { name: "線上展覽", badgeCount: eventStore.events.filter(e => e.majorCategory === '線上展覽').length },
]);

const activeTab = ref("全部");

const filteredEvents = computed(() => {
  let results = eventStore.events;

  if (activeTab.value !== '全部') {
    results = results.filter(e => e.majorCategory === activeTab.value);
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
  <div class="search-page-container d-flex position-relative">
    <!-- Left Sidebar: Filters -->
    <FilterSidebar class="sidebar"></FilterSidebar>

    <!-- Main Content Area -->
    <div class="search-content flex-grow-1 d-flex flex-column pt-4 px-4 overflow-y-auto g-3 container-md ms-0">

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
            <button class="btn btn-outline-secondary btn-rect btn-sort-dropdown dropdown-toggle" type="button" id="sortDropdown"
              data-bs-toggle="dropdown" aria-expanded="false">
              <div class="sort-header d-flex">
                <div class="sort-title-area d-flex align-items-center">
                  <div class="sort-icon-wrapper">
                    <Icon icon="ph:sort-ascending" width="20" height="20" class="sort-icon" />
                  </div>
                  <span class="sort-text">排序</span>
                </div>
                <!-- <Icon icon="ph:caret-up" width="16" height="16" class="caret-icon" /> -->
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

      <div class="results-scroll-area d-flex flex-column">
        <div v-for="event in filteredEvents" :key="event.id">
          <HorizontalEventCard 
            :id="event.id"
            :title="event.title" 
            :category="event.category" 
            :rating="event.rating"
            :ticket-status="event.ticketStatus" 
            :time="formatDateRange(event.startDate, event.endDate)"
            :location="`${event.city} ${event.venue}`" 
            :price-range="formatPrice(event.price)"
            :image="event.imageUrl" 
          />
        </div>
      </div>
    </div>

    <!-- Calendar Overlay (Fixed to screen) -->
    <Transition name="fade">
      <div v-if="showCalendar" class="calendar-overlay">
        <div class="container-sm me-0">
          <CalendarView @close="showCalendar = false" />
        </div>
      </div>
    </Transition>

    <!-- Floating Action Button (Fixed to screen) -->
    <button 
      class="btn-calendar-fab"
      @click="toggleCalendar"
      :aria-label="showCalendar ? '關閉行事曆' : '開啟行事曆'"
    >
      <Icon :icon="showCalendar ? 'ph:x' : 'ph:calendar-blank'" width="24" height="24" />
    </button>
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
  height: 100vh;
  overflow: hidden;
}

.search-content {
  height: 100%;
  gap: var(--main-gap-y-large);
}

.results-scroll-area {
  gap: var(--main-gap-x);
  padding-bottom: 80px; // Space for the FAB
}

.calendar-overlay {
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  z-index: 1040;
  padding: 0 24px;
  pointer-events: none;

  & > div {
    pointer-events: auto;
  }
}

.btn-calendar-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--background-brand-default); // #211f1e
  color: var(--text-brand-on-brand);
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1050;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: var(--background-brand-hover);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.winherit {
  width: inherit;
}

.sort-text {
  translate: 0 0.1em;
}
</style>
