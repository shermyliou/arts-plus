<script setup>
/**
 * VenueSelector - 場館單選切換組件
 * 透過 v-model 控管選中狀態，支援自動換行排列。
 */

const props = defineProps({
  venues: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

/**
 * 點擊場館時觸發更新
 */
const handleSelect = (venueId) => {
  emit('update:modelValue', venueId)
}
</script>

<template>
  <div class="venue-selector d-flex flex-wrap gap-2">
    <button
      v-for="venue in venues"
      :key="venue.id"
      type="button"
      class="btn rounded-pill venue-selector__btn"
      :class="modelValue === venue.id ? 'btn-primary' : 'btn-outline-secondary'"
      @click="handleSelect(venue.id)"
    >
      {{ venue.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/tokens/_primitive.scss";

.venue-selector {
  width: 100%;

  &__btn {
    padding: 8px 20px;
    font-size: 14px;
    transition: all 0.2s ease;
    white-space: nowrap; // 確保文字不折行

    // 針對未選中狀態進行微調，增加層次感
    &.btn-outline-secondary {
      border-color: $gray-500 !important;
      background-color: #f9f9f9;
      color: var(--text-default-secondary);

      &:hover {
        background-color: var(--background-default-secondary);
        //border-color: var(--border-brand-default) !important;
        color: var(--text-brand-default);
      }
    }

    // 選中狀態樣式 (btn-primary 已經是黑底白字)
    &.btn-primary {
      background-color: $brand-700 !important;
      font-weight: 700;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>