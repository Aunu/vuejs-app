

import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue';
import SpotifyPage from '@/components/spotify.vue';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/spotify',
      name: 'spotify',
      component: SpotifyPage
    },
    {
        path: '/:pathMatch(.*)*', // Catch-all route
        redirect: '/home' // Redirect to the default route
      }
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
  
  export default router;

