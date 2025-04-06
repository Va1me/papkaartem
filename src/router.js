import { createMemoryHistory, createRouter } from 'vue-router'

import generalPage from './components/generalPage.vue';
import bioPage from './components/bioPage.vue';
import commPage from './components/commPage.vue';

const routes = [
  { path: '/', component: generalPage },
  { path: '/bio', component: bioPage },
  { path: '/comm ', component: commPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;