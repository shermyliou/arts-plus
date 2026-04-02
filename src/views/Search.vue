<script setup>
import HorizontalEventCard from '@/components/ui/HorizontalEventCard.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<template>
  <div class="search-view container-fluid py-4">
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

    <!-- Results Section -->
    <div class="row">
      <div>
        <HorizontalEventCard class="my-2 w-100"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-view {
  max-width: var(--main-container-max-width);
  margin: 0 auto;
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
