<template>
  <div class="theme" @click="changeTheme">
    <el-tooltip
      effect="dark"
      :content="isDark ? '默认主题' : '暗黑主题'"
      placement="bottom"
    >
      <el-icon>
        <component :is="isDark ? 'Sunset' : 'MoonNight'"></component>
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useStore } from "vuex";

const store = useStore();

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

function changeTheme() {
  const isDark = toggleDark();
  store.commit("setIsDark", isDark);
}
</script>

<style lang="scss" scoped>
.theme {
  cursor: pointer;
  width: 38px;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f6f6f6;
  }
}

[class="dark"] .theme {
  &:hover {
    background-color: #242424;
  }
}
</style>
