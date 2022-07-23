export default [
  {
    path: "/workbench",
    name: "workbench",
    meta: {
      title: "工作台",
      breadcrumb: ["Dashboard", "工作台"],
    },
    component: () =>
      import(/* webpackChunkName: "workbench" */ "@/views/system/menu.vue"),
  },
  {
    path: "/analysis",
    name: "analysis",
    meta: {
      title: "分析页",
      breadcrumb: ["Dashboard", "分析页"],
    },
    component: () =>
      import(/* webpackChunkName: "analysis" */ "@/views/system/role.vue"),
  },
];
