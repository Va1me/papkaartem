import { createMemoryHistory, createRouter } from 'vue-router'

import generalPage from './components/generalPage.vue';

const routes = [
  { path: '/', component: generalPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;