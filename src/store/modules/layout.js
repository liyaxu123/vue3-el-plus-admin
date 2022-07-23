export default {
  state: {
    isExpand: true,
    isDark:
      localStorage.getItem("vueuse-color-scheme") == "dark"
        ? true
        : false || false,
  },
  mutations: {
    updateIsExpand(state, flag) {
      state.isExpand = flag;
    },
    setIsDark(state, theme) {
      state.isDark = theme;
    },
  },
};
