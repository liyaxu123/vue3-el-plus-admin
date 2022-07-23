// 导入vue-i18n插件
import { createI18n } from "vue-i18n";
import el_zh_cn from "element-plus/lib/locale/lang/zh-cn";
import el_en from "element-plus/lib/locale/lang/en";

import zh_cn from "./lang/zh-cn";
import en from "./lang/en";

const messages = {
  "zh-CN": {
    el: el_zh_cn,
    ...zh_cn,
  },
  "en-US": {
    el: el_en,
    ...en,
  },
};

// 通过选项创建 VueI18n 实例
const i18n = createI18n({
  locale: localStorage.getItem(process.env.VUE_APP_LANG_NAME) || "zh-CN",
  fallbackLocale: "zh-CN",
  globalInjection: true,
  messages,
});

export default i18n;
