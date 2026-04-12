<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import SearchOverlay from "@/components/ui/SearchOverlay.vue";
import NotificationOverlay from "@/components/ui/NotificationOverlay.vue";
import UserOverlay from "@/components/ui/UserOverlay.vue";

const router = useRouter();
const isSearchVisible = ref(false);
const isNotificationVisible = ref(false);
const isUserVisible = ref(false);

const tabs = ref([
  { name: "首頁", badgeCount: 0, path: "/" },
  { name: "搜尋結果", badgeCount: 0, path: "/search" },
  { name: "活動介紹", badgeCount: 0, path: "/event/:id" },
  { name: "藝文地圖", badgeCount: 0, path: "/map" },
  { name: "主辦方_活動編輯", badgeCount: 0, path: "/organizer" },
  { name: "Bootstrap檢查器", badgeCount: 0, path: "/bootstrap" },
]);

const searchQuery = ref("");

const handleSearch = (query) => {
  isSearchVisible.value = false;
  router.push({ path: '/search', query: { q: query || searchQuery.value } });
};

</script>

<template>
  <nav class="navbar navbar-expand-lg custom-navbar brand-50 fixed-top">
    <div class="container-fluid p-0 d-flex align-items-center">
      <a class="navbar-brand me-4" href="#">
        <img src="/images/ArtPlusLogo.png" alt="ArtPlus" width="128" />
      </a>

      <!-- Centered Nav Tabs -->
      <div class="flex-grow-1 d-flex justify-content-center">
        <ul class="nav nav-pills custom-nav-pills">
          <li v-for="tab in tabs" :key="tab.name" class="nav-item">
            <RouterLink
              class="nav-link d-flex align-items-center justify-content-center gap-1"
              exact-active-class="active"
              :to="tab.path"
            >
              <span class="tab-text">{{ tab.name }}</span>
              <span v-if="tab.badgeCount > 0" class="badge rounded-pill bg-danger badge-sm">
                {{ tab.badgeCount }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center gap-4 ms-4">
        <div class="position-relative">
          <div 
            class="search-wrapper" 
            :class="{ 'expanded': isSearchVisible }"
            @click="isSearchVisible = true"
          >
            <div class="search-bar-inner d-flex align-items-center gap-2 px-3 py-2">
              <Icon icon="ph:magnifying-glass" class="search-icon" />
              <input 
                v-if="isSearchVisible"
                v-model="searchQuery"
                type="text" 
                placeholder="搜尋" 
                class="search-input-field flex-grow-1"
                @keyup.enter="handleSearch(searchQuery)"
                ref="searchInput"
              />
              <span v-else class="search-placeholder-text">搜尋</span>
              <button 
                v-if="isSearchVisible" 
                class="btn btn-search-trigger p-0 ms-2"
                @click.stop="handleSearch(searchQuery)"
              >
                搜尋
              </button>
            </div>
          </div>

          <!-- Search Overlay (Dropdown only) -->
          <Transition name="fade-slide">
            <SearchOverlay
              v-if="isSearchVisible"
              @close="isSearchVisible = false"
              @search="handleSearch"
            />
          </Transition>
        </div>

        <div class="navbar-actions">
          <div class="nav-item-icon">
            <Icon icon="ph:shopping-cart" />
          </div>
          <div class="nav-item-icon">
            <Icon icon="ph:ticket" />
          </div>
          <div class="nav-item-icon position-relative bell-trigger" @click="isNotificationVisible = !isNotificationVisible">
            <Icon :icon="isNotificationVisible ? 'ph:bell-fill' : 'ph:bell'" />
            <Transition name="fade-slide">
              <NotificationOverlay 
                v-if="isNotificationVisible" 
                @close="isNotificationVisible = false" 
              />
            </Transition>
          </div>
          <div class="nav-item-icon position-relative user-trigger" @click="isUserVisible = !isUserVisible">
            <Icon :icon="isUserVisible ? 'ph:user-fill' : 'ph:user'" />
            <Transition name="fade-slide">
              <UserOverlay 
                v-if="isUserVisible" 
                @close="isUserVisible = false" 
              />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.custom-navbar {
  background-color: var(--background-brand-secondary);
  height: 72px;
  border-bottom: 1px solid #eeeeee;
  padding: 0 60px !important;

  @media (max-width: 1200px) {
    padding: 0 20px !important;
  }
}

.search-wrapper {
  background-color: #eeeeee;
  border-radius: 50px;
  border: #000000 1px solid;
  width: 200px;
  height: 40px;
  color: #888888;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  transition: width 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  cursor: pointer;

  &.expanded {
    width: 600px;
    background-color: var(--background-brand-secondary);
    cursor: default;

    @media (max-width: 1400px) {
      width: 500px;
    }

    @media (max-width: 992px) {
      width: 400px;
    }
  }

  @media (max-width: 1400px) {
    width: 150px;
  }
}

.search-bar-inner {
  width: 100%;
}

.search-input-field {
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--text-default-default);
  &::placeholder {
    color: var(--text-default-tertiary);
  }
}

.btn-search-trigger {
  font-weight: bold;
  font-size: 14px;
  color: var(--text-brand-on-brand-secondary);
  white-space: nowrap;
  letter-spacing: 1px;
  border: none;
  background: none;

  &:hover {
    color: var(--text-brand-default);
  }
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-item-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  color: #333333;
}
</style>
