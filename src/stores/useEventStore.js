import { defineStore } from 'pinia'
import rawEvents from '@/data/events.json'

/**
 * 處理原始活動資料，增加星期幾、日期範圍等資訊
 * @param {Array} rawData 
 * @returns {Array}
 */
function initializeEvents(rawData) {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  
  // 類別轉換對照表 (JSON -> UI Tabs)
  const categoryMap = {
    '展覽': '藝文展覽',
    '戲劇': '藝文演出',
    '音樂': '藝文演出',
    '體驗': '藝文體驗',
    '講座': '藝文講座',
    '小旅行': '藝文小旅遊',
    '線上': '線上展覽'
  };

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
    const allPrices = fixedSessions.flatMap(s => s.prices || []);
    const minPrice = allPrices.length ? Math.min(...allPrices) : 0;
    const maxPrice = allPrices.length ? Math.max(...allPrices) : 0;

    // --- 4. 處理 Comments 隨機化 ---
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

    // 計算票務狀態
    const totalRemaining = fixedSessions.reduce((sum, s) => sum + (s.remainingTickets || 0), 0);
    const ticketStatus = totalRemaining > 0 ? (totalRemaining < 50 ? '最後搶購' : '熱烈販售中') : '已售完';

    return {
      ...event,
      category: categoryMap[event.category] || event.category,
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
  },
  actions: {
  },
})