import Search from '@/components/PmSearch.vue';
import About from '@/components/PmAbout.vue';
import TrackDetail from '@/components/TrackDetail.vue';

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/track/:id',
    name: 'track',
    component: TrackDetail,
  },
];

export default routes;
