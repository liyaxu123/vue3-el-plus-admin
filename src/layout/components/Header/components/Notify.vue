<template>
  <div class="notify">
    <el-badge is-dot>
      <el-icon><Bell /></el-icon>
    </el-badge>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";

.notify {
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
