import { createMemoryHistory, createRouter } from 'vue-router'

import generalPage from './components/generalPage.vue';
import bioPage from './components/bioPage.vue';
import commPage from './components/commPage.vue';
import devsPage from './components/devsPage.vue';

const routes = [
  { path: '/', component: generalPage },
  { path: '/bio', component: bioPage },
  { path: '/comm', component: commPage },
  { path: '/devs', component: devsPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;