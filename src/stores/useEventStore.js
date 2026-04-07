import { defineStore } from 'pinia'
import rawEvents from '@/data/events.json'

/**
 * 處理原始活動資料，增加星期幾、日期範圍等資訊
 * @param {Array} rawData 
 * @returns {Array}
 */
function initializeEvents(rawData) {const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

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
    // 取得所有 session 裡面的所有價格，展開成一個大陣列 [750, 1000, 800, 1200...]
    const allPrices = fixedSessions.flatMap(s => s.prices);
    const minPrice = allPrices.length ? Math.min(...allPrices) : 0;
    const maxPrice = allPrices.length ? Math.max(...allPrices) : 0;
    const priceRange = minPrice === maxPrice ? `${minPrice}` : `${minPrice} - ${maxPrice}`;

    // --- 4. 處理 Comments 隨機化 ---
    const fixedComments = event.comments.map(comment => {
      // 隨機評論評分: 3 到 5 分 (整數)
      const randomCommentRating = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      
      // 隨機評論日期: 在活動開始日期後的 1~5 天
      const baseDate = new Date(startDate || '2026-01-01');
      const randomDayOffset = Math.floor(Math.random() * 5) + 1;
      baseDate.setDate(baseDate.getDate() + randomDayOffset);
      const commentDate = baseDate.toISOString().split('T')[0];

      return {
        ...comment,
        rating: randomCommentRating,
        date: commentDate,
        dayOfWeek: weekDays[baseDate.getDay()]
      };
    });

    // --- 5. 計算活動總評分 (基於隨機評論的平均值) ---
    const totalRating = fixedComments.reduce((acc, c) => acc + c.rating, 0);
    const avgRating = fixedComments.length 
      ? (totalRating / fixedComments.length).toFixed(1) 
      : (Math.random() * (5 - 4) + 4).toFixed(1); // 若無評論則隨機給 4.x

    // --- 最終回傳加工後的完整物件 ---
    return {
      ...event,
      startDate,
      endDate,
      priceRange,
      rating: parseFloat(avgRating),
      ratingCount: fixedComments.length || Math.floor(Math.random() * 100),
      sessions: fixedSessions,
      comments: fixedComments,
      // 補足可能缺失的空字串欄位
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