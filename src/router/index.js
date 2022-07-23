import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
import useNProgress from "@/hooks/useNProgress";

const NProgress = useNProgress();

// 页面布局组件
const Layout = () =>
  import(/* webpackChunkName: "layout" */ "../layout/index.vue");

const routes = [
  {
    path: "/",
    redirect: "/menu",
    name: "Layout",
    component: Layout,
    // children: [
    //   {
    //     path: "menu",
    //     name: "analysis",
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "@/views/system/menu.vue"),
    //   },
    // ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  // 匹配404路由
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: () =>
      import(/* webpackChunkName: "NotFontPage" */ "@/views/NotFont.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // 开启进度条动画
  NProgress.start();

  const token = store.state.userStore.token;
  if (to.name !== "login") {
    if (!token) {
      // 返回到登录页
      next({ name: "login" });
    } else {
      // 页面刷新，重新加载权限路由
      if (!store.state.userStore.isDynamicAddedRoute) {
        store.dispatch("loadAsyncRoute").then(() => {
          router.push(to.fullPath);
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  // 关闭进度条动画
  NProgress.done();
});

export default router;
