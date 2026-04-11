<script setup>
import { Icon } from '@iconify/vue';
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Test'
  },
  category: {
    type: String,
    default: 'test'
  },
  rating: {
    type: [Number, String],
    default: 0
  },
  ticketStatus: {
    type: String,
    default: 'test'
  },
  time: {
    type: String,
    default: 'test'
  },
  location: {
    type: String,
    default: 'test'
  },
  priceRange: {
    type: String,
    default: 'test'
  },
  image: {
    type: String,
    default: 'test'
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="horizontal-event-card">
    <div class="horizontal-event-card__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="horizontal-event-card__body">
      <div class="horizontal-event-card__header align-items-start">
        <div>
          <span v-if="category" class="badge rounded-pill border fw-light horizontal-event-card__category-badge">{{ category }}</span>
          <h3 class="horizontal-event-card__title mt-2" :title="title">{{ title }}</h3>
        </div>
        <button class="horizontal-event-card__favorite-btn" :class="{ 'is-favorite': isFavorite }">
          <Icon :icon="isFavorite ? 'ph:heart-fill' : 'ph:heart'" />
        </button>
      </div>
      
      
      <div class="horizontal-event-card__status">
        <div class="horizontal-event-card__rating" v-show="rating">
          <Icon icon="ph:star-fill" class="horizontal-event-card__rating-icon" />
          <span>{{ rating }}</span>
        </div>
        <div class="horizontal-event-card__ticket-status">
          <Icon icon="ph:users" class="horizontal-event-card__ticket-icon" />
          <span>{{ ticketStatus }}</span>
        </div>
      </div>
      
      <div class="horizontal-event-card__footer">
        <div class="horizontal-event-card__meta">
          <div class="horizontal-event-card__time">{{ time }}</div>
          <div class="horizontal-event-card__location">
            <template v-if="location.includes(' ')">
              <span class="horizontal-event-card__city">{{ location.split(' ')[0] }}</span>
              <span class="horizontal-event-card__venue">{{ location.split(' ').slice(1).join(' ') }}</span>
            </template>
            <span v-else>{{ location }}</span>
          </div>
        </div>
        <div class="horizontal-event-card__price">
          {{ priceRange }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.horizontal-event-card {
  display: flex;
  gap: 16px;
  padding: var(--component-padding-y-normal) var(--component-padding-x-normal);
  background: var(--background-default-default);
  border: 1px solid var(--border-default-default);
  border-radius: var(--border-radius-1);
  width: 100%;
  position: relative;
  box-sizing: border-box;
  
  &__image {
    flex-shrink: 0;
    width: 114px;
    height: 152px;
    border-radius: var(--border-radius-1);
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: var(--component-gap-y-small);
    min-width: 0; // Needed for text truncation in flex children
  }
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__category-badge {
    color: var(--text-brand-primary);
    padding-top: 0.5em;
  }
  
  &__favorite-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 32px;
    color: var(--icon-default-default);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
    
    &.is-favorite {
      color: var(--icon-danger-default);
    }
  }
  
  &__title {
    margin: 4px 0;
    color: var(--text-default-default);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &__status {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 8px;
  }
  
  &__rating {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-warning-tertiary);
    font-size: 14px;
    height: 20px;
    
    &-icon {
      font-size: 18px;
    }

    span {
      line-height: 1;
      transform: translateY(0.0625em); // 視覺補償，使文字中線與圖示中心對齊
    }
  }
  
  &__ticket-status {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-positive-default);
    font-size: 14px;
    height: 20px;
    
    .horizontal-event-card__ticket-icon {
      font-size: 18px;
    }

    span {
      line-height: 1;
      transform: translateY(1px); // 視覺補償
    }
  }
  
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
  }
  
  &__meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--text-default-default);
    font-size: 14px;
  }
  
  &__location {
    display: flex;
    gap: 4px;
  }
  
  &__city {
    font-weight: 700;
  }
  
  &__price {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-brand-tertiary);
  }
}
</style>
