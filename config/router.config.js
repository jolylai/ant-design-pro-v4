export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        name: 'user-login',
        path: '/user-login',
        component: './user-login',
      },
      {
        name: '404',
        path: '/exception/404',
        component: './exception/404',
      },
      {
        name: '403',
        path: '/exception/403',
        component: './exception/403',
      },
      {
        path: '/',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
]