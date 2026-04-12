import { defineStore } from 'pinia'
import usersData from '@/data/users.json'

/**
 * @typedef {Object} PurchasedEvent
 * @property {number} eventId - 活動 ID
 * @property {number} accumulatedPoints - 該活動累計獲得的點數
 */

/**
 * @typedef {Object} CartEvent
 * @property {number} eventId - 活動 ID
 * @property {string} session - 加入購物車的場次/時間
 */

/**
 * @typedef {Object} User
 * @property {number} id - 系統編號
 * @property {string} nickname - 中文暱稱
 * @property {string} email - 電子郵件
 * @property {string} password - 密碼
 * @property {number} points - 目前累積的點數
 * @property {string} gender - 性別
 * @property {string} role - 角色 (organizer|consumer)
 * @property {string} avatar - 大頭照圖片路徑
 * @property {PurchasedEvent[]} purchasedEvents - 已購買的活動清單
 * @property {CartEvent[]} cartEvents - 已加入購物車的活動清單
 * @property {number[]} favoriteEvents - 已收藏的活動清單 (儲存活動 ID)
 */

export const useUserStore = defineStore('user', {
  state: () => ({
    users: usersData,
    currentUser: usersData.find(u => u.id === 11) || null
  }),
  getters: {
    /**
     * 獲取所有主辦方帳號
     * @param {Object} state 
     * @returns {User[]}
     */
    organizers: (state) => state.users.filter(user => user.role === 'organizer'),
    
    /**
     * 獲取所有消費者帳號
     * @param {Object} state 
     * @returns {User[]}
     */
    consumers: (state) => state.users.filter(user => user.role === 'consumer'),

    /**
     * 檢查是否已登入
     * @param {Object} state 
     * @returns {boolean}
     */
    isLoggedIn: (state) => !!state.currentUser
  },
  actions: {
    /**
     * 模擬登入功能
     * @param {string} email 
     * @param {string} password 
     * @returns {boolean}
     */
    login(email, password) {
      const user = this.users.find(u => u.email === email && u.password === password)
      if (user) {
        this.currentUser = { ...user }
        return true
      }
      return false
    },

    /**
     * 登出
     */
    logout() {
      this.currentUser = null
    },

    /**
     * 更新使用者點數
     * @param {number} userId 
     * @param {number} newPoints 
     */
    updatePoints(userId, newPoints) {
      const user = this.users.find(u => u.id === userId)
      if (user) {
        user.points = newPoints
        if (this.currentUser && this.currentUser.id === userId) {
          this.currentUser.points = newPoints
        }
      }
    }
  }
})
