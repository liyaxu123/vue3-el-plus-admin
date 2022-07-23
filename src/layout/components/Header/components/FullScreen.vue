<template>
  <div class="fullScreen">
    <el-tooltip
      effect="dark"
      :content="isFullscreen ? '退出全屏' : '全屏'"
      placement="bottom"
    >
      <el-icon @click="toggle" v-if="!isFullscreen">
        <svg
          t="1658395118562"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2884"
          width="200"
          height="200"
        >
          <path
            d="M240.8 196l178.4 178.4-45.6 45.6-177.6-179.2-68 68V128h180.8l-68 68z m133.6 408.8L196 783.2 128 715.2V896h180.8l-68-68 178.4-178.4-44.8-44.8zM715.2 128l68 68-178.4 178.4 45.6 45.6 178.4-178.4 68 68V128H715.2z m-65.6 476.8l-45.6 45.6 178.4 178.4-68 68H896V715.2l-68 68-178.4-178.4z"
            p-id="2885"
          ></path>
        </svg>
      </el-icon>
      <el-icon @click="toggle" v-else>
        <svg
          t="1658395146556"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3039"
          width="200"
          height="200"
        >
          <path
            d="M142.4 96.8l-44.8 44.8 173.6 174.4-68 68H384V203.2l-67.2 67.2zM752.8 316l173.6-174.4-44.8-44.8-174.4 173.6-67.2-67.2V384h180.8zM270.4 707.2l-169.6 170.4 44.8 49.6 170.4-174.4 68 68V640H203.2zM820.8 640H640v180.8l68-68 170.4 174.4 44.8-49.6-169.6-170.4z"
            p-id="3040"
          ></path>
        </svg>
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";

.fullScreen {
  cursor: pointer;
  width: 38px;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    @include hover_bg_color();
  }
}
</style>
