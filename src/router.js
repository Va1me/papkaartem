import { createMemoryHistory, createRouter } from 'vue-router'

import generalPage from './components/generalPage.vue';
import bioPage from './components/bioPage.vue';

const routes = [
  { path: '/', component: generalPage },
  { path: '/bio', component: bioPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;