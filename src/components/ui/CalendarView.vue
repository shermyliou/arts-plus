<script setup>
import { Icon } from '@iconify/vue';

const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const dates = [1, 2, 3, 4, 5, 6, 7];

// Mock event data based on Figma layout
const events = [
  { 
    id: 1, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 1, 
    row: 1, 
    span: 1, 
    showSeatStatus: true 
  },
  { 
    id: 2, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 2, 
    row: 2, 
    span: 2, 
    showSeatStatus: true 
  },
  { 
    id: 3, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 1, 
    row: 3, 
    span: 2, 
    showSeatStatus: true 
  },
  { 
    id: 4, 
    title: '解憂雜貨店', 
    time: '', 
    col: 6, 
    row: 4, 
    span: 1, 
    showSeatStatus: false,
    badge: '截止'
  },
  { 
    id: 5, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 3, 
    row: 5, 
    span: 1, 
    showSeatStatus: true 
  },
  { 
    id: 6, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 5, 
    row: 5, 
    span: 1, 
    showSeatStatus: true 
  },
  { 
    id: 7, 
    title: '解憂雜貨店', 
    time: '19:00', 
    col: 7, 
    row: 5, 
    span: 1, 
    showSeatStatus: true 
  }
];
</script>

<template>
  <div class="calendar-view rounded-4 p-4 mb-4">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="calendar-title m-0">日曆檢視</h2>
      <button class="btn btn-link p-0 text-dark">
        <Icon icon="ph:caret-down" width="24" height="24" />
      </button>
    </div>

    <!-- Calendar Grid -->
    <div class="calendar-grid-container position-relative">
      <!-- Background Headers and Grid -->
      <div class="calendar-bg-grid  position-absolute w-100 h-100">
        <div class="calendar-header-row d-flex border-bottom border-gray-300">
          <div v-for="day in days" :key="day" class="calendar-header-cell flex-fill p-2 border-end border-gray-300 last-child-no-border">
            <span class="day-text">{{ day }}</span>
          </div>
        </div>
        <div class="calendar-body-rows d-flex flex-column h-100">
          <div class="calendar-date-row d-flex flex-fill">
            <div v-for="date in dates" :key="date" class="calendar-date-cell flex-fill p-2 border-end border-gray-300 last-child-no-border">
              <span class="date-text">{{ date }}</span>
            </div>
          </div>
          <!-- Multiple rows for events -->
          <div v-for="r in 4" :key="r" class="calendar-empty-row flex-fill d-flex border-top border-gray-300">
            <div v-for="c in 7" :key="c" class="flex-fill border-end border-gray-300 last-child-no-border"></div>
          </div>
        </div>
      </div>

      <!-- Events Overlay -->
      <div class="calendar-events-overlay top-0 start-0 w-100">
        <div class="grid-overlay">
          <div 
            v-for="event in events" 
            :key="event.id"
            class="calendar-event-item rounded-2 p-1 d-flex align-items-center gap-1"
            :style="{
              gridColumn: `${event.col} / span ${event.span}`,
              gridRow: event.row
            }"
          >
            <span v-if="event.time" class="event-time flex-shrink-0">{{ event.time }}</span>
            
            <div v-if="event.badge" class="badge-pill" :class="event.badge === '截止' ? 'badge-danger' : 'badge-disabled'">
              {{ event.badge }}
            </div>

            <span class="event-title text-truncate">{{ event.title }}</span>
            
            <Icon v-if="event.showSeatStatus" icon="ph:users" width="20" height="20" class="ms-auto flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar-view {
  background-color: var(--background-default-secondary); // #f6f2ef
}

.calendar-title {
  letter-spacing: 0.72px;
  color: #1e1e1e;
}

.calendar-grid-container {
  min-height: 260px;
}

.calendar-bg-grid {
  display: flex;
  flex-direction: column;
}

.calendar-header-cell, .calendar-date-cell {
  width: calc(100% / 7);
  min-height: 40px;
}

.last-child-no-border:last-child {
  border-right: none !important;
}

.day-text {
  font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
  font-size: 14px;
  color: var(--text-default-secondary); // #8e8e93
  letter-spacing: 0.42px;
}

.date-text {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: var(--text-default-secondary); // #8e8e93
}

.grid-overlay {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 48px);
  gap: 4px;
}

.calendar-events-overlay{
  padding-top: 5rem;
}

.calendar-event-item {
  background-color: rgba(254, 233, 231, 0.6); // Based on Figma rgba(254,233,231,0.6)
  height: 40px;
  border-radius: 8px;
  font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
  font-size: 14px;
  color: black;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: rgba(254, 233, 231, 0.8);
  }
}

.event-time {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  margin-right: 4px;
}

.event-title {
  flex: 1;
  letter-spacing: 0.42px;
}

.badge-pill {
  padding: 2px 12px;
  border-radius: 1000px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
  line-height: 1.5;
}

.badge-danger {
  background-color: var(--background-danger-secondary); // #fdd3d0
}

.badge-disabled {
  background-color: var(--background-disabled-default); // #d9d9d9
}

.border-gray-300 {
  border-color: var(--border-default-default) !important; // #d9d9d9
}

.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
