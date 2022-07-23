export default [
  {
    path: "/category",
    name: "category",
    meta: {
      title: "商品分类",
      breadcrumb: ["商城管理", "商品分类"],
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "@/views/mall/category.vue"),
  },
  {
    path: "/specs",
    name: "specs",
    meta: {
      title: "商品规格",
      breadcrumb: ["商城管理", "商品规格"],
    },
    component: () =>
      import(/* webpackChunkName: "specs" */ "@/views/mall/specs.vue"),
  },
  {
    path: "/goods",
    name: "goods",
    meta: {
      title: "商品管理",
      breadcrumb: ["商城管理", "商品管理"],
    },
    component: () =>
      import(/* webpackChunkName: "goods" */ "@/views/mall/goods.vue"),
  },
  {
    path: "/member",
    name: "member",
    meta: {
      title: "会员管理",
      breadcrumb: ["商城管理", "会员管理"],
    },
    component: () =>
      import(/* webpackChunkName: "member" */ "@/views/mall/member.vue"),
  },
  {
    path: "/banner",
    name: "banner",
    meta: {
      title: "轮播图管理",
      breadcrumb: ["商城管理", "轮播图管理"],
    },
    component: () =>
      import(/* webpackChunkName: "banner" */ "@/views/mall/banner.vue"),
  },
  {
    path: "/seckill",
    name: "seckill",
    meta: {
      title: "秒杀活动",
      breadcrumb: ["商城管理", "秒杀活动"],
    },
    component: () =>
      import(/* webpackChunkName: "seckill" */ "@/views/mall/seckill.vue"),
  },
];
