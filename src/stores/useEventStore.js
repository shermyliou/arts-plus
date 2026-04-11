import { defineStore } from 'pinia'
import rawEvents from '@/data/events.json'
import { useUserStore } from './useUserStore'

/**
 * 處理原始活動資料
 * @param {Array} rawData 
 * @returns {Array}
 */
function initializeEvents(rawData) {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  return rawData.map(event => {
    // --- 1. 處理 Sessions 與 星期 ---
    const fixedSessions = event.sessions.map(s => ({
      ...s,
      dayOfWeek: weekDays[new Date(s.date).getDay()]
    }));

    // --- 2. 處理活動開始/結束日期 ---
    const sortedDates = fixedSessions.map(s => s.date).sort();
    const startDate = sortedDates[0] || '';
    const endDate = sortedDates[sortedDates.length - 1] || '';

    // --- 3. 自動計算 Price Range ---
    // 從新的 tickets 結構中提取價格
    const allPrices = fixedSessions.flatMap(s => s.tickets.map(t => t.price));
    const minPrice = allPrices.length ? Math.min(...allPrices) : 0;
    const maxPrice = allPrices.length ? Math.max(...allPrices) : 0;

    // --- 4. 處理 Comments ---
    const fixedComments = (event.comments || []).map(comment => {
      const randomCommentRating = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      const baseDate = new Date(startDate || '2026-01-01');
      const randomDayOffset = Math.floor(Math.random() * 5) + 1;
      baseDate.setDate(baseDate.getDate() + randomDayOffset);
      return {
        ...comment,
        rating: randomCommentRating,
        date: baseDate.toISOString().split('T')[0],
        dayOfWeek: weekDays[baseDate.getDay()]
      };
    });

    const avgRating = fixedComments.length 
      ? (fixedComments.reduce((acc, c) => acc + c.rating, 0) / fixedComments.length).toFixed(1) 
      : (Math.random() * (5 - 4) + 4).toFixed(1);

    // 計算票務狀態 (根據所有場次的總餘票)
    const totalRemaining = fixedSessions.reduce((sum, s) => {
      return sum + s.tickets.reduce((tSum, t) => tSum + (t.remaining || 0), 0);
    }, 0);
    const ticketStatus = totalRemaining > 0 ? (totalRemaining < 50 ? '最後搶購' : '熱烈販售中') : '已售完';

    return {
      ...event,
      startDate,
      endDate,
      price: { min: minPrice, max: maxPrice },
      ticketStatus,
      rating: parseFloat(avgRating),
      ratingCount: fixedComments.length || Math.floor(Math.random() * 100),
      sessions: fixedSessions,
      comments: fixedComments,
      imageUrl: event.image || '/images/event-1.jpg',
      ticketInfo: event.ticketInfo || '暫無購票須知',
      eventInfo: event.eventInfo || '暫無活動介紹',
      eventNotice: event.eventNotice || '暫無注意事項'
    };
  });
}

export const useEventStore = defineStore('event', {
  state: () => ({
    events: initializeEvents(rawEvents),
  }),
  getters: {
    /**
     * 獲取包含收藏狀態的活動列表
     * @returns {Array}
     */
    eventsWithFavoriteStatus: (state) => {
      const userStore = useUserStore()
      const favoriteIds = userStore.currentUser?.favoriteEvents || []
      
      return state.events.map(event => ({
        ...event,
        isFavorited: favoriteIds.includes(event.id)
      }))
    },

    /**
     * 根據大類別篩選活動
     * @param {Object} state 
     */
    getEventsByMajorCategory: (state) => (majorCategory) => {
      return state.events.filter(e => e.majorCategory === majorCategory)
    }
  },
  actions: {
    /**
     * 切換收藏狀態
     * @param {number} eventId 
     */
    toggleFavorite(eventId) {
      const userStore = useUserStore()
      if (!userStore.currentUser) {
        alert('請先登入以收藏活動')
        return
      }

      const index = userStore.currentUser.favoriteEvents.indexOf(eventId)
      if (index > -1) {
        userStore.currentUser.favoriteEvents.splice(index, 1)
      } else {
        userStore.currentUser.favoriteEvents.push(eventId)
      }
      
      // 同步更新全體使用者資料 (模擬後端更新)
      const userInList = userStore.users.find(u => u.id === userStore.currentUser.id)
      if (userInList) {
        userInList.favoriteEvents = [...userStore.currentUser.favoriteEvents]
      }
    }
  }
})
