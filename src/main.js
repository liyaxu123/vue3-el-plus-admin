import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// elementPlus 暗黑模式样式
import "element-plus/theme-chalk/dark/css-vars.css";
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 使用 animate.css
import "animate.css";

const app = createApp(App);

// 全局注册el-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 使用验证码组件
import MakeitCaptcha from "makeit-captcha";
import "makeit-captcha/dist/captcha.min.css";
app.use(MakeitCaptcha);

// 引入国际化插件
import i18n from "@/locales";
app.use(i18n);

// 动画插件：https://motion.vueuse.org/
import { MotionPlugin } from "@vueuse/motion";
app.use(MotionPlugin);

app.use(store).use(router).mount("#app");
