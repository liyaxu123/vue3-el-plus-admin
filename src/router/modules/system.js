export default [
  {
    path: "/menu",
    name: "menu",
    meta: {
      title: "菜单管理",
      breadcrumb: ["系统设置", "菜单管理"],
    },
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/views/system/menu.vue"),
  },
  {
    path: "/role",
    name: "role",
    meta: {
      title: "角色管理",
      breadcrumb: ["系统设置", "角色管理"],
    },
    component: () =>
      import(/* webpackChunkName: "role" */ "@/views/system/role.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: {
      title: "管理员管理",
      breadcrumb: ["系统设置", "管理员管理"],
    },
    component: () =>
      import(
        /* webpackChunkName: "admin" */ "@/views/system/administrator.vue"
      ),
  },
];
