<script setup>
import { ref, onMounted } from 'vue'; 
import { useRoute } from 'vue-router';
import { useEventStore } from '@/stores/useEventStore';
import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import EventLayout from '@/components/common/EventLayout.vue';
import BookingCard from '@/components/ui/BookingCard.vue';
import ReviewCard from '@/components/ui/ReviewCard.vue'; 
import EventNavTabs from '@/components/ui/EventNavTabs.vue';
import VenueSelector from '@/components/ui/VenueSelector.vue';
import NewsMarquee from '@/components/ui/NewsMarquee.vue';

const route = useRoute();
const eventStore = useEventStore();
const eventId = parseInt(route.params.id);
const event = eventStore.events.find(e => e.id === eventId);

onMounted(() => {
  if (event) {
    document.title = `${event.title}｜Arts+`;
  }
});

// 引入活動海報圖片 
const eventPoster = event?.imageUrl || '/images/event-dog.jpeg'
const eventTitle = event?.title || '果陀劇場《深夜小狗神秘習題》'

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

//場館
const venueOptions = [
  { id: 'v1', name: '臺北市藝文推廣處城市舞台' },
  { id: 'v2', name: '衛武營國家藝術文化中心戲劇院' },
  { id: 'v3', name: '臺中市中山堂' },
  { id: 'v4', name: '桃園展演中心展演廳' }
];

// 定義選中的狀態 (對應 v-model)
const selectedVenueId = ref('v1');

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
          <!-- HeroEventCard  -->
          <HeroEventCard 
            :image="eventPoster" 
            :title="eventTitle"
            :score="4.3"
            :reviewCount="16"
          />
          
          <!-- Navtabs -->
          <EventNavTabs 
            :tabs="tabs" 
            v-model:activeTab="activeTab" 
          />

          <!-- 最新消息跑馬燈 -->
          <NewsMarquee />


          <section id="booking" class="d-flex flex-column gap-4 py-5">
            <h2>購票資訊</h2>

            <!-- </VenueSelector> -->
            <div class="venue-selector">
              <h3>選擇場館</h3>
              <VenueSelector 
                :venues="venueOptions" 
                v-model="selectedVenueId" 
              />
              <!-- <p class="mt-2">當前選中 ID: {{ selectedVenueId }}</p> -->
            </div>

            <!-- <BookingCard /> -->
            <div class="booking">
              <h3>選擇場次</h3>
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
            </div>
          </section>

          <section id="info" class="d-flex flex-column gap-4 py-5">
            <h2>活動資訊</h2>
          </section>

          <section id="map" class="d-flex flex-column gap-4 py-5">
            <h2>藝文地圖</h2>
          </section>

          <section id="notice" class="d-flex flex-column gap-4 py-5">
            <h2>重要須知</h2>
          </section>


          <section id="review" class="d-flex flex-column gap-4 py-5">
            <h2>心得評論</h2>
            <!-- <ReviewCard/> -->
            <ReviewCard 
              v-for="item in reviews" 
              :key="item.id"
              :userName="item.name"
              :score="item.score"
              :comment="item.text"
            />

            <!-- 發表評論btn -->
            <button class="btn btn-primary rounded-2" >
              <Icon icon="ph:pencil-line-fill" width="20" height="20" />
              發表評論
            </button>

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
.event-detail-content{
  width: 100%;
  padding: 0 24px;

  h3{
    font-size: 16px;
    font-weight: 500;
    color: var(--text-default-secondary);
    margin-bottom: 16px;
  }

  .venue-selector{
    margin-bottom: 8px;
  }

  // #review{
  //   background-color: ;
  // }

}

</style>