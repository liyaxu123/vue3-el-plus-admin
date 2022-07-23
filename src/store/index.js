import { createStore } from "vuex";

// 用户相关的store
import userStore from "./modules/user";
import layoutStore from "./modules/layout";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    layoutStore,
  },
});
