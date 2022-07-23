import { login } from "@/api/user";
import router from "@/router/index";

export default {
  state: {
    isLogin: localStorage.getItem("VUE_ADMIN_ISLOGIN") || false,
    token: localStorage.getItem(process.env.VUE_APP_TOKEN_NAME) || "",
    // 用户的菜单列表数据
    menuList:
      JSON.parse(localStorage.getItem(process.env.VUE_APP_MENU_LIST)) || [],
    menuUrls:
      JSON.parse(localStorage.getItem(process.env.VUE_APP_MENU_URLS)) || [],
    // 是否动态添加路由
    isDynamicAddedRoute: false,
  },
  mutations: {
    // 设置token
    setTooken(state, data) {
      state.token = data;
      localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, data);
    },
    // 设置登录状态
    setLoginState(state, flag) {
      state.isLogin = flag;
      localStorage.setItem("VUE_ADMIN_ISLOGIN", flag);
    },
    setMenuList(state, menuList) {
      state.menuList = menuList;
      localStorage.setItem(
        process.env.VUE_APP_MENU_LIST,
        JSON.stringify(menuList)
      );
    },
    setMenuUrls(state, menuUrls) {
      state.menuUrls = menuUrls;
      localStorage.setItem(
        process.env.VUE_APP_MENU_URLS,
        JSON.stringify(menuUrls)
      );
    },
    // 处理退出登录
    logout(state) {
      state.isLogin = false;
      localStorage.removeItem("VUE_ADMIN_ISLOGIN");
      state.token = "";
      localStorage.removeItem(process.env.VUE_APP_TOKEN_NAME);
      state.menuList = [];
      localStorage.removeItem(process.env.VUE_APP_MENU_LIST);
    },
    setDynamicAddedRoute(state, flag) {
      state.isDynamicAddedRoute = flag;
    },
  },
  actions: {
    // 处理登录的业务逻辑
    async handleLogin({ commit, dispatch }, data) {
      // 发送登录的网络请求
      try {
        const res = await login(data);
        console.log("登录成功：", res);
        commit("setTooken", res.list.token);
        commit("setMenuList", res.list.menus);
        const menuUrls = res.list.menus_url.map((item) => item.slice(1));
        commit("setMenuUrls", menuUrls);
        commit("setLoginState", true);

        // 登录成功后，需要根据后台返回的菜单数据来动态添加路由
        dispatch("loadAsyncRoute");
        if (res.code == 200) {
          return true;
        } else {
          return Promise.reject(res.msg);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // 加载权限路由
    loadAsyncRoute({ state, commit }) {
      return new Promise((resolve) => {
        // 1.先去加载 router/modules 文件夹里面所有的routes
        const allRoutes = [];
        // 递归获取router/modules目录下的所有以.js文件结尾的暴露出来的模块
        const routeFiles = require.context("@/router/modules", true, /\.js/);

        routeFiles.keys().forEach((key) => {
          const route = require("@/router/modules" + key.split(".")[1]);
          allRoutes.push(...route.default);
        });

        console.log("自动加载的所有的路由：", allRoutes);

        // 2.根据后台返回的数据，过滤出权限路由
        const asyncRoutes = allRoutes.filter((item) =>
          state.menuUrls.includes(item.name)
        );

        console.log("过滤后的权限路由：", asyncRoutes);

        // 3.将权限路由添加如系统中
        asyncRoutes.forEach((route) => {
          // 将这些权限路由添加到 Layout 的子路由中
          router.addRoute("Layout", route);
        });

        commit("setDynamicAddedRoute", true);

        resolve();
      });
    },
  },
};
