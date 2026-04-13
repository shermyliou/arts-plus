<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

/**
 * @typedef {Object} myFilterItem
 * @property {string} label - 篩選標籤名稱
 * @property {string} icon - Iconify 圖標代碼
 * @property {boolean} isOpen - 是否展開
 */

/** @type {import('vue').Ref<myFilterItem[]>} */
const filters = ref([
  { label: '活動時間', icon: 'ph:calendar-blank', isOpen: false },
  { 
    label: '縣市', 
    icon: 'ph:map-pin', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '北部', type: 'region' },
      { label: '臺北市', type: 'item' },
      { label: '新北市', type: 'item' },
      { label: '基隆市', type: 'item' },
      { label: '桃園市', type: 'item' },
      { label: '新竹市', type: 'item' },
      { label: '新竹縣', type: 'item' },
      { label: '苗栗縣', type: 'item' },
      { label: '中部', type: 'region' },
      { label: '臺中市', type: 'item' },
      { label: '彰化縣', type: 'item' },
      { label: '南投縣', type: 'item' },
      { label: '雲林縣', type: 'item' },
      { label: '嘉義市', type: 'item' },
      { label: '嘉義縣', type: 'item' },
      { label: '南部', type: 'region' },
      { label: '臺南市', type: 'item' },
      { label: '高雄市', type: 'item' },
      { label: '屏東縣', type: 'item' },
      { label: '東部', type: 'region' },
      { label: '宜蘭縣', type: 'item' },
      { label: '花蓮縣', type: 'item' },
      { label: '臺東縣', type: 'item' },
      { label: '離島', type: 'region' },
      { label: '澎湖縣', type: 'item' },
      { label: '金門縣', type: 'item' },
      { label: '連江縣', type: 'item' },
    ]
  },
  { 
    label: '排除票種', 
    icon: 'ph:ticket', 
    isOpen: false,
    selected: [],
    options: [
      { label: '排除已售完', type: 'item' },
      { label: '排除無障礙票', type: 'item' },
      { label: '排除學生票', type: 'item' },
    ]
  },
  { 
    label: '親子與無障礙', 
    icon: 'ph:person-arms-spread', 
    isOpen: false,
    selected: [],
    options: [
      { label: '僅顯示全部符合的活動。建議出發前向場館確認。', type: 'instruction' },
      { label: '哺乳室', type: 'item' },
      { label: '兒童友善內容', type: 'item' },
      { label: '兒童友善高度', type: 'item' },
      { label: '電梯', type: 'item' },
      { label: '輪椅', type: 'item' },
      { label: '無障礙入口', type: 'item' },
      { label: '無障礙座位', type: 'item' },
      { label: '無障礙廁所', type: 'item' },
      { label: '無障礙停車場', type: 'item' },
      { label: '助聽系統', type: 'item' },
      { label: '手語導覽', type: 'item' },
      { label: '口述影像', type: 'item' },
      { label: '觸覺展示', type: 'item' },
    ]
  },
  { 
    label: '展覽類型', 
    icon: 'ph:palette', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '繪畫', type: 'item' },
      { label: '雕塑', type: 'item' },
      { label: '綜合媒材', type: 'item' },
      { label: '書法', type: 'item' },
      { label: '攝影', type: 'item' },
      { label: '設計', type: 'item' },
      { label: '歷史', type: 'item' },
      { label: '數位互動', type: 'item' },
    ]
  },
  { 
    label: '傳統表演藝術類型', 
    icon: 'ph:mask-happy', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '布袋戲', type: 'item' },
      { label: '戲曲', type: 'item' },
      { label: '歌仔戲', type: 'item' },
      { label: '曲藝／相聲', type: 'item' },
      { label: '客家戲', type: 'item' },
      { label: '國樂', type: 'item' },
    ]
  },
  { 
    label: '戲劇類型', 
    icon: 'ph:theater-masks', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '現代戲劇', type: 'item' },
      { label: '音樂劇', type: 'item' },
      { label: '脫口秀、漫才', type: 'item' },
      { label: '偶戲', type: 'item' },
      { label: '馬戲雜技', type: 'item' },
      { label: '歌劇', type: 'item' },
      { label: '肢體劇場', type: 'item' },
      { label: '物件劇場', type: 'item' },
      { label: '環境劇場', type: 'item' },
      { label: '其他戲劇節目', type: 'item' },
    ]
  },
  { 
    label: '舞蹈類型', 
    icon: 'ph:figure-simple-dancing', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '現代舞', type: 'item' },
      { label: '民族舞', type: 'item' },
      { label: '芭蕾舞', type: 'item' },
      { label: '街舞', type: 'item' },
      { label: '其他舞蹈節目', type: 'item' },
    ]
  },
  { 
    label: '音樂類型', 
    icon: 'ph:music-notes', 
    isOpen: false,
    selected: ['全部'],
    options: [
      { label: '全部', type: 'item' },
      { label: '流行音樂', type: 'item' },
      { label: '動漫／電影', type: 'item' },
      { label: '現代', type: 'item' },
      { label: '古典', type: 'item' },
      { label: '爵士', type: 'item' },
      { label: '打擊樂', type: 'item' },
      { label: '世界、民族', type: 'item' },
      { label: '其他音樂節目', type: 'item' },
      { label: '編制', type: 'region' },
      { label: '全部', type: 'item' },
      { label: '獨奏', type: 'item' },
      { label: '合奏', type: 'item' },
      { label: '樂團', type: 'item' },
      { label: '獨唱', type: 'item' },
      { label: '合唱', type: 'item' },
    ]
  },
]);

/**
 * 切換篩選項目的展開狀態
 * @param {number} index - 項目索引
 */
const toggleFilter = (index) => {
  filters.value[index].isOpen = !filters.value[index].isOpen;
};

/**
 * 切換選項選擇狀態
 * @param {number} filterIndex - 篩選群組索引
 * @param {Object} option - 選項物件
 */
const toggleOption = (filterIndex, option) => {
  const filter = filters.value[filterIndex];
  if (!filter.selected) return;

  const optionLabel = option.label;

  if (optionLabel === '全部') {
    // 這裡需要處理同一個清單中有多個 '全部' 的情況 (例如音樂類型的編制)
    // 但目前簡易處理：如果選了全部，就只留下全部
    filter.selected = ['全部'];
  } else {
    // 移除 '全部'
    filter.selected = filter.selected.filter(item => item !== '全部');
    
    const index = filter.selected.indexOf(optionLabel);
    if (index > -1) {
      filter.selected.splice(index, 1);
    } else {
      filter.selected.push(optionLabel);
    }
    
    // 如果都沒選，且該篩選器有 '全部' 選項，預設選 '全部'
    if (filter.selected.length === 0 && filter.options.some(opt => opt.label === '全部')) {
      filter.selected = ['全部'];
    }
  }
};
</script>

<template>
  <aside class="filter-sidebar h-100 overflow-y-auto">
    <div v-for="(filter, index) in filters" :key="filter.label" class="filter-group">
      <div v-if="index > 0" class="filter-divider mx-3"></div>
      <button 
        class="filter-header w-100 d-flex align-items-center justify-content-between border-0 bg-transparent py-2 ps-4 pe-2"
        @click="toggleFilter(index)"
      >
        <div class="d-flex align-items-center gap-2">
          <Icon :icon="filter.icon" width="20" height="20" class="filter-icon" />
          <span class="filter-label text-nowrap">{{ filter.label }}</span>
        </div>
        <Icon 
          :icon="filter.isOpen ? 'ph:caret-up' : 'ph:caret-down'" 
          width="20" 
          height="20" 
          class="arrow-icon" 
        />
      </button>

      <!-- Placeholder for filter content when expanded -->
      <transition name="fade">
        <div v-if="filter.isOpen" class="filter-content ps-3 pe-2 pb-3">
          <template v-if="filter.options">
            <div class="options-list d-flex flex-column">
              <div 
                v-for="(option, optIndex) in filter.options" 
                :key="`${option.label}-${optIndex}`"
                :class="[
                  'option-item d-flex align-items-center',
                  option.type === 'region' ? 'region-header' : '',
                  option.type === 'instruction' ? 'instruction-text' : '',
                  option.type === 'item' ? 'item-clickable' : ''
                ]"
                @click="option.type === 'item' ? toggleOption(index, option) : null"
              >
                <div v-if="option.type === 'item'" class="check-icon-wrapper d-flex align-items-center justify-content-center">
                  <Icon 
                    v-if="filter.selected.includes(option.label)" 
                    icon="ph:check" 
                    width="20" 
                    height="20" 
                  />
                </div>
                <div v-else-if="option.type === 'instruction'" class="check-icon-wrapper"></div>
                
                <span class="option-label">
                  <template v-if="option.type === 'instruction'">
                    僅顯示全部符合的活動。<br />建議出發前向場館確認。
                  </template>
                  <template v-else>
                    {{ option.label }}
                  </template>
                </span>
              </div>
            </div>
          </template>
          <template v-else>
            <p class="text-muted small ps-4 ms-2">篩選內容尚未實作</p>
          </template>
        </div>
      </transition>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use 'bootstrap' as *;

.filter-sidebar {
  width: 100%;
  max-width: var(--aside-left-max-width);
  padding: var(--aside-padding-x) var(--main-padding-y);
  padding-bottom: 16px;
  top: var(--component-navbar-height);
    &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
    }

    &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
    }

    /* 滑動時（hover 容器）才顯示 */
    &:hover::-webkit-scrollbar-thumb {
    background: var(--text-default-tertiary);
    }
}

@include media-breakpoint-down(md) {
  .filter-sidebar {
    max-width: none;
    padding: 0;
  }
}

.filter-header {
  min-height: 48px;
  color: var(--text-default-default);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--background-default-secondary-hover) !important;
  }

  .filter-icon {
    color: var(--icon-default-tertiary);
    opacity: 0.5;
  }

  .filter-label {
    font-size: 16px;
    letter-spacing: 0.16px;
    font-weight: 400;
    line-height: 1.5;
    font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
  }

  .arrow-icon {
    color: var(--icon-default-default);
  }
}

.filter-divider {
  height: 1px;
  background-color: var(--border-default-secondary);
  opacity: 0.5;
}

.filter-content {
  background-color: transparent;

  .options-list {
    gap: 4px;
  }

  .option-item {
    padding: 4px 8px;
    border-radius: var(--border-radius-1);
    min-height: 32px;

    .check-icon-wrapper {
      width: 24px;
      height: 24px;
      margin-right: 4px;
      flex-shrink: 0;
    }

    .option-label {
      font-family: var(--sds-typography-family-sans, "Noto Sans TC", sans-serif);
    }
  }

  .item-clickable {
    cursor: pointer;
    color: var(--text-default-default);

    &:hover {
      background-color: var(--background-default-secondary-hover);
    }

    .option-label {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.16px;
    }
  }

  .region-header {
    color: var(--text-default-secondary);
    margin-top: 4px;

    .option-label {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4;
      letter-spacing: 0.42px;
    }
  }

  .instruction-text {
    color: var(--text-default-secondary);
    align-items: flex-start !important;

    .option-label {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4;
      letter-spacing: 0.42px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
