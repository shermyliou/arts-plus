import { createRouter, createWebHashHistory } from 'vue-router'
import PublicLayout from '@/components/common/PublicLayout.vue'
import HomeView from '@/views/HomeView.vue'
import Search from '@/views/Search.vue'
import EventDetail from '@/views/EventDetail.vue'
import OrganizerLayout from '@/components/common/OrganizerLayout.vue'
import EventEdit from '@/views/EventEdit.vue'
import BootstrapChecker from '@/views/BootstrapChecker.vue'

const routes = [
    { 
      path: '/',
      component: PublicLayout,
      meta: { title: "Art+" },
      children: [
        { path: '', component: HomeView, name: 'home' },
        { path: 'search', component: Search },
        { path: 'event/:id', component: EventDetail },
        { path: 'bootstrap', component: BootstrapChecker },
      ]
    },
    {
      path: '/organizer',
      component: OrganizerLayout,
      children: [
        { path: '', component: EventEdit },
      ]
    }
  ]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router