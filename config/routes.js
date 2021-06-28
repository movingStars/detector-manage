export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/home',
              },
              {
                path: '/home',
                name: 'home',
                icon: 'home',
                component: './Home',
              },
              {
                path: '/userList',
                name: 'userList',
                icon: 'user',
                component: './UserList',
              },
              {
                path: '/sourceList',
                name: 'sourceList',
                icon: 'user',
                component: './sourceList',
              },
              {
                path: '/diversionList',
                name: 'diversionList',
                icon: 'user',
                component: './diversionList',
              },
              {
                path: '/statistics',
                name: 'statistics',
                icon: 'user',
                component: './statistics',
              },
              {
                path: '/authMan',
                name: 'authMan',
                icon: 'crown',
                component: './AuthMan',
              },
              {
                path: '/userMan',
                name: 'userMan',
                icon: 'user',
                component: './UserMan',
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
