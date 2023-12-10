import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const about: AppRouteModule = {
  path: '/clocking',
  name: 'Clocking',
  component: LAYOUT,
  redirect: '/clocking/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '考勤管理',
    orderNo: 11,
  },
  children: [
    {
      path: 'index',
      name: 'Clocking',
      component: () => import('/@/views/clocking/index.vue'),
      meta: {
        title: '考勤管理',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
