<script setup>
/**
 * myBookingCardProps - 訂票卡片屬性介面
 */
defineProps({
  date: {
    type: String,
    default: '2026/3/28 (六) 10:00'
  },
  location: {
    type: String,
    default: '衛武營國家藝術文化中心'
  },
  stock: {
    type: [Number, String],
    default: 253
  },
  price: {
    type: String,
    default: '750 、 1,000'
  }
})

const emit = defineEmits(['buy'])
</script>

<template>
  <div class="booking-card">
    <div class="booking-card__body">
      <div class="booking-card__info-group">
        <div class="booking-card__info-item">
          <p class="booking-card__text booking-card__text--large">{{ date }}</p>
        </div>
        <div class="booking-card__info-item">
          <p class="booking-card__text booking-card__text--large">{{ location }}</p>
        </div>
      </div>
      <div class="booking-card__detail-group">
        <p class="booking-card__text">剩：{{ stock }}</p>
        <p class="booking-card__text">票價：{{ price }}</p>
      </div>
    </div>
    <button class="booking-card__button" @click="emit('buy')">
      購買
    </button>
  </div>
</template>

<style lang="scss" scoped>
//@use "@/assets/styles/tokens/_semantic.scss" as tokens;
@import "@/assets/styles/tokens/_primitive.scss"; // 確保基礎變數先載入
@import "@/assets/styles/tokens/_semantic.scss";

.booking-card {
  background-color: var(--gray-0);
  border: 1px solid var(--border-default-default);
  border-radius: $border-radius-3; // 圓角設定為 24px
  padding: 16px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 0;
  }

  &__info-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__info-item {
    display: flex;
    align-items: center;
  }

  &__detail-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__text {
    margin: 0;
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #000;

    &--large {
      font-size: 20px;
      line-height: 1.2;
      color: var(--text-default-default);
    }
  }

  &__button {
    width: 100%;
    height: 56px;
    border-radius: var(--border-radius-1);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.68px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-brand-default);
    color: var(--text-brand-on-brand);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--background-brand-hover);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>