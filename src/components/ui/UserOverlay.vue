<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const overlayRef = ref(null);

const accounts = ref([
  {
    id: 1,
    name: "Ting",
    avatar: "/images/char1.png",
    type: "personal"
  },
  {
    id: 2,
    name: "林雅婷",
    org: "藝境文化",
    avatar: "/images/avatars/user-10.avif",
    type: "organization"
  }
]);

const handleClickOutside = (event) => {
  if (overlayRef.value && !overlayRef.value.contains(event.target)) {
    // Avoid double toggle if clicking the user icon
    const userTrigger = document.querySelector('.user-trigger');
    if (userTrigger && userTrigger.contains(event.target)) {
      return;
    }
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div class="user-overlay-container" ref="overlayRef">
    <div class="user-card p-2 shadow">
      <!-- Account List -->
      <div class="account-list mb-3">
        <div v-for="account in accounts" :key="account.id" class="user-row d-flex align-items-center gap-3 p-2 mb-2">
          <div class="avatar-wrapper">
            <img :src="account.avatar" alt="avatar" class="avatar-img" />
          </div>
          <div class="user-info">
            <div class="user-name">{{ account.name }}</div>
            <div v-if="account.org" class="user-org">{{ account.org }}</div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="actions-row d-flex align-items-center justify-content-center">
        <button class="btn btn-primary text-nowrap">登入</button>
        <button class="btn btn-text text-primary text-nowrap">註冊</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-overlay-container {
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1050;
}

.user-card {
  background-color: var(--background-default-default);
  border: 1px solid var(--border-default-default);
  border-radius: var(--border-radius-3);
}

.user-row {
  cursor: pointer;
  border-radius: var(--border-radius-2);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--background-default-default-hover);
  }
}

.avatar-wrapper {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  font-size: 16px;
  color: #1e1e1e;
  line-height: 1.5;
}

.user-org {
  font-size: 14px;
  color: #8e8e93;
  line-height: 1.4;
}

/* Animations (Reuse from SearchOverlay style) */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease !important;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0 !important;
  transform: translateY(-10px) !important;
}
</style>
