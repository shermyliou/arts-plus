<script setup>
import { ref } from 'vue';
import navbar from '../components/common/navbar.vue'
//import SideBar from '@/components/common/SideBar.vue';
import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import EventLayout from '@/components/common/EventLayout.vue';
import BookingCard from '@/components/ui/BookingCard.vue';
import ReviewCard from '@/components/ui/ReviewCard.vue';

// 引入活動海報圖片 
const eventPoster = '/images/event-dog.jpeg'

// 選中的分頁名稱
const activeTab = ref('購票資訊');

// 分頁資料與對應的 section id
const tabs = [
  { name: '購票資訊', id: '#booking' },
  { name: '活動資訊', id: '#info' },
  { name: '藝文地圖', id: '#map' },
  { name: '重要須知', id: '#notice' },
  { name: '心得評論', id: '#review' } 
];

//評論資料
const reviews = [
  { id: 1, name: 'Diana Campos', score: 4.3, text: '' },
  { id: 2, name: '路人甲', score: 5.0, text: '如果我能解開謎團，這是不是表示，我可以完成任何計劃？我有能力達成任何理想？當世界簡化為公式，勇氣是唯一的未知數' },
  { id: 3, name: 'Lee', score: 3.5, text: '場地稍微有點小。' }
];
</script>

<template>
  <div class="event-detail-page">
    <navbar/>

    <EventLayout>
      <template #aside-left>
        <div class="aside-left"></div>
      </template>

      <template #default>
        <div class="event-detail-content">
          <!-- <HeroEventCard /> -->
          <HeroEventCard 
            :image="eventPoster" 
            title="果陀劇場《深夜小狗神秘習題》"
            :score="4.3"
            :reviewCount="16"
          />
          
          <!-- Navtabs -->
          <div class="nav-wrapper">
            <ul class="nav nav-pills custom-nav-pills">
              <li class="nav-item" v-for="tab in tabs" :key="tab.name">
                <a 
                  class="nav-link"
                  :class="{ active: activeTab === tab.name }"
                  :href="tab.id"
                  @click="activeTab = tab.name"
                >
                  {{ tab.name }}
                </a>
              </li>
            </ul>
          </div>          

          <section id="booking" class="mt-4">
            <!-- <BookingCard /> -->
            <BookingCard 
              date="2026/3/28 (六) 10:00"
              location="衛武營國家藝術文化中心"
              stock="253"
              price="750 、 1,000"
            />

            <BookingCard 
              date="2026/3/29 (日) 14:30"
              location="衛武營國家藝術文化中心"
              stock="12"
              price="750 、 1,000"
              class="mt-3" 
            />
          </section>

          <section id="review" class="mt-4">
            <!-- <ReviewCard/> -->
            <ReviewCard 
              v-for="item in reviews" 
              :key="item.id"
              :userName="item.name"
              :score="item.score"
              :comment="item.text"
              class="mb-3"
            />
          </section>
        </div>
      </template>

      <template #aside-right>
        <div class="aside-right"></div>
      </template>
    </EventLayout>
  </div>
</template>

<style lang="scss" scoped>
// .event-detail-content {
//   width: 100%;
//   padding: 24px 16px;
  
//   .nav-wrapper {
//     margin: 20px 0;
//     position: sticky; // 可選：讓選單在捲動時固定在頂部
//     top: 0;
//     background: #fff;
//     z-index: 10;
//   }
// }

.event-detail-content {
  width: 100%;
  padding: 24px 16px;

  .nav-wrapper {
    margin: 20px 0;
    position: sticky; // 可選：讓選單在捲動時固定在頂部
    top: 0;
    background: #fff;
    z-index: 10;

    .custom-nav-pills {

      .nav-item {
        position: relative;
        // 中間分割線
        &:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background-color: var(--border-default-default);
        }
      }

      .nav-link {
        // border-radius: 6px;
        // color: var(--text-default-default);
        // padding: 8px 16px;
        border: none;
        transition: all 0.2s ease;

        &.active {
          // background-color: #fff !important;
          // color: var(--text-default-default) !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      }
    }
  }
}

// 讓捲動更平滑
:deep(html) {
  scroll-behavior: smooth;
}
</style>